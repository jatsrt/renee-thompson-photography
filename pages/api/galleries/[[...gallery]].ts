import {
  S3,
  ListObjectsV2Command,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { NextApiHandler } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { Folder, Item } from "../../../fetchers/useFetcherFolder";
import { request } from "http";

const GalleriesShow: NextApiHandler = async (req, res) => {
  const session = await getSession(req, res);
  const isAdmin = (session?.user.email ?? "").endsWith("@reneethompson.photos");

  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY!,
    },
  });

  const gallery = req.query.gallery
    ? (req.query.gallery as string[])
    : undefined;
  const prefix = gallery ? gallery.join("/") + "/" : undefined;

  if (req.method == "GET") {
    const result = await s3.send(
      new ListObjectsV2Command({
        Bucket: process.env.GALLERY_BUCKET_NAME!,
        Delimiter: "/",
        Prefix: prefix,
      })
    );

    const { CommonPrefixes, Contents, Prefix } = result;

    const subFolders = (CommonPrefixes ?? [])
      .map((p) => p.Prefix!)
      .filter((p) => isAdmin || !p.startsWith("Private/"));

    const files = (Contents ?? [])
      .filter((c) => c.Key != prefix && c.Key?.endsWith(".preview"))
      .filter((c) => isAdmin || !c.Key?.startsWith("Private/"));
    const items = await Promise.all(
      files.map(async (c) => {
        const head = await s3.send(
          new HeadObjectCommand({
            Bucket: process.env.GALLERY_BUCKET_NAME!,
            Key: c.Key,
          })
        );

        const item: Item = {
          name: c.Key!.replace(".preview", ""),
          preview: `/media/${c.Key}`,
          source: `/media/${c.Key?.replace(".preview", "")}`,
          modified: c.LastModified!,
          orientation: head.Metadata?.imageorientation,
          favorite: !!head.Metadata?.favorite,
        };
        return item;
      })
    );

    const folder: Folder = {
      prefix: Prefix!,
      isAdmin: !!isAdmin,
      subFolders,
      items,
    };

    return res.status(200).json(folder);
  }

  res.status(500);
};

export default GalleriesShow;
