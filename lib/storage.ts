import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
} from "@aws-sdk/client-s3";

const R2_BUCKET_NAME = "next-vercel-sample";
const client = new S3Client({
  region: "auto",
  endpoint: process.env.CLOUDFLARE_ENDPOINT as string,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY as string,
  },
});

export const putImage = async (file: File, pathname: string) => {
  const params: PutObjectCommandInput = {
    Bucket: R2_BUCKET_NAME,
    Key: pathname,
    Body: file,
    ContentType: "image/jpeg",
    ACL: "public-read",
  };
  const command = new PutObjectCommand(params);
  await client.send(command);
  return `${process.env.IMAGE_HOST_URL}/${pathname}`;
};

export const deleteImage = async (pathname: string) => {
  const params: DeleteObjectCommandInput = {
    Bucket: R2_BUCKET_NAME,
    Key: pathname,
  };
  const command = new DeleteObjectCommand(params);
  await client.send(command);
};
