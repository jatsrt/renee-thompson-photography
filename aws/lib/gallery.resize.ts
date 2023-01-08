import { S3Event } from "aws-lambda";
import { GetObjectCommand, PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import sharp from "sharp";

export const handler = async (event: S3Event): Promise<void> => {
  const s3 = new S3({ region: "us-east-1" });

  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    if (key.endsWith(".preview") || key.endsWith("/")) {
      return;
    }

    const original = await s3.send(
      new GetObjectCommand({ Bucket: bucket, Key: key })
    );

    if (!(original.ContentType ?? "").startsWith("image/")) {
      return;
    }

    const image = await sharp(await original.Body!.transformToByteArray());
    const imageMeta = await image.metadata();
    const isWide = (imageMeta.width ?? 0) > (imageMeta.height ?? 0);

    const imageWidth = isWide ? 800 : 400;
    const imageOrientation = isWide ? "landscape" : "portrait";
    const newImage = await image.resize(imageWidth).toBuffer();
    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: `${key}.preview`,
        Body: newImage,
        ContentType: original.ContentType,
        Metadata: { ImageOrientation: imageOrientation },
      })
    );
    console.log("Image resized:", key, imageWidth, imageOrientation);
  }
};
