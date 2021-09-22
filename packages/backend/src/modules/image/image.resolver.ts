import { Resolver } from '@nestjs/graphql';
import { ImageService } from './image.service';
import { Image } from './models/image.model';

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}
}
