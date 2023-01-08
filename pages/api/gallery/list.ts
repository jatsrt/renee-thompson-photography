import {
  GetObjectCommand,
  S3,
  ListObjectsV2Command,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextApiHandler } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { Folder, Item } from "../../../fetchers/useFetcherFolder";
import prettyBytes from "pretty-bytes";

const ListFunction: NextApiHandler = async (req, res) => {
  const session = await getSession(req, res);
  const isAdmin = (session?.user.email ?? "").endsWith("@reneethompson.photos");

  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY!,
    },
  });

  const prefix = req.query.prefix as string | undefined;

  const result = await s3.send(
    new ListObjectsV2Command({
      Bucket: process.env.GALLERY_BUCKET_NAME!,
      Delimiter: "/",
      Prefix: prefix,
    })
  );

  const { CommonPrefixes, Contents, NextContinuationToken, Prefix } = result;

  const subFolders = (CommonPrefixes ?? []).map((p) => p.Prefix!);
  const files = (Contents ?? []).filter(
    (c) => c.Key != prefix && c.Key?.endsWith(".preview")
  );
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
        preview: await getSignedUrl(
          s3,
          new GetObjectCommand({
            Bucket: process.env.GALLERY_BUCKET_NAME!,
            Key: c.Key,
          }),
          { expiresIn: 3600 }
        ),
        source: await getSignedUrl(
          s3,
          new GetObjectCommand({
            Bucket: process.env.GALLERY_BUCKET_NAME!,
            Key: c.Key?.replace(".preview", ""),
          }),
          { expiresIn: 3600 }
        ),
        modified: c.LastModified!,
        size: prettyBytes(c.Size!),
        orientation: head.Metadata?.imageorientation,
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
  res.send(folder);
};

export default ListFunction;
