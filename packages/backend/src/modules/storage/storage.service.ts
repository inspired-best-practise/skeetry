import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { FileUpload } from 'graphql-upload';
import sharp from 'sharp';
import stream from 'stream';

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
    const imageFactory = sharp();
    const readStream = createReadStream();
    readStream.pipe(imageFactory);
    const size = 400;

    const pass = new stream.PassThrough();
    imageFactory
      .clone()
      .resize(size)
      .jpeg({ quality: 60, progressive: true })
      .pipe(pass);

    const result = await this.s3
      .upload({ Bucket: AWS_S3_BUCKET_NAME!, Key: filename, Body: pass })
      .promise();
    return result.Location;
  }
}
