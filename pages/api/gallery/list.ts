import { GetObjectCommand, S3 } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextApiHandler } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { Folder, Item } from "../../../fetchers/useFetcherFolder";
import prettyBytes from "pretty-bytes";

const UploadUrlFunction: NextApiHandler = async (req, res) => {
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

  const result = await s3.listObjectsV2({
    Bucket: process.env.GALLERY_BUCKET_NAME!,
    Delimiter: "/",
    Prefix: prefix,
  });

  const { CommonPrefixes, Contents, NextContinuationToken, Prefix } = result;

  const subFolders = (CommonPrefixes ?? []).map((p) => p.Prefix!);
  const files = (Contents ?? []).filter((c) => c.Key != prefix);
  const items = await Promise.all(
    files.map(async (c) => {
      const item: Item = {
        name: c.Key!,
        link: await getSignedUrl(
          s3,
          new GetObjectCommand({
            Bucket: process.env.GALLERY_BUCKET_NAME!,
            Key: c.Key,
          }),
          { expiresIn: 3600 }
        ),
        modified: c.LastModified!,
        size: prettyBytes(c.Size!),
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

export default UploadUrlFunction;

// const s3 = new S3({
//     apiVersion: '2006-03-01',
//     accessKeyId: process.env.ACCESS_KEY,
//     secretAccessKey: process.env.SECRET_KEY,
//   })

//   const post = await s3.createPresignedPost({
//     Bucket: process.env.BUCKET_NAME,
//     Fields: {
//       key: req.query.file,
//       'Content-Type': req.query.fileType,
//     },
//     Expires: 60, // seconds
//     Conditions: [
//       ['content-length-range', 0, 1048576], // up to 1 MB
//     ],
//   })

//   res.status(200).json(post)
