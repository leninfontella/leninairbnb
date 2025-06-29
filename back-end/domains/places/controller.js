import "dotenv/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import { type } from "os";

const { S3_ACCESS_KEY, S3_SECRET_KEY } = process.env;

// a client can be shared by different commands.
const client = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY,
  },
});

export const sendToS3 = async (filename, path, mimetype) => {
  const command = new PutObjectCommand({
    Bucket: "BUCKET",
    Key: filename,
    Body: fs.readFileSync(path),
    ContentType: mimetype,
    ACL: "public-read",
  });

  try {
    await client.send(command);

    return `https://${BUCKET}.s3.us-east-2.amazonaws.com/${filename}`;
  } catch (error) {
    throw error;
  }
};
