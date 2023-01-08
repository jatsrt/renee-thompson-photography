import { S3 } from "@aws-sdk/client-s3";
import { NextApiHandler } from "next";

const UploadUrlFunction: NextApiHandler = async (req, res) => {
  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY!,
    },
  });

  const objects = await s3.listObjectsV2({
    Bucket: "gallery.reneethompson.photos",
    Delimiter: "/",
    Prefix: "test/",
  });

  console.log("Objects: ", objects);

  res.send(`Hello!`);
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
