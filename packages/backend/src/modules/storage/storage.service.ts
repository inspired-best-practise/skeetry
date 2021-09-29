import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { FileUpload } from 'graphql-upload';
import * as sharp from 'sharp';

const { AWS_REGION, AWS_S3_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_KEY } =
  process.env;

AWS.config.update({ region: AWS_REGION });

@Injectable()
export class StorageService {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_KEY,
    });
  }

  async upload({ createReadStream, filename }: FileUpload): Promise<string> {
    const stream = createReadStream();
    const size = 400;

    const resizer = sharp().resize({ width: size }).jpeg().withMetadata();

    const fileBuffer = stream.pipe(resizer);

    const result = await this.s3
      .upload({ Bucket: AWS_S3_BUCKET_NAME!, Key: filename, Body: fileBuffer })
      .promise();
    return result.Location;
  }
}
