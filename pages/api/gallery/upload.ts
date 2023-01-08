import { S3 } from "@aws-sdk/client-s3";
import { NextApiHandler } from "next";

const UploadFunction: NextApiHandler = async (req, res) => {
  res.send({ msg: "ok" });
};

export default UploadFunction;
