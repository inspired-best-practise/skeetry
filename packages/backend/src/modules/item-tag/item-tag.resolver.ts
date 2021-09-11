import { Resolver, Query } from '@nestjs/graphql';
import { ItemTagService } from './item-tag.service';
import { ItemTag } from './models/itemTag.model';

@Resolver(() => ItemTag)
export class ItemTagResolver {
  constructor(private readonly itemTag: ItemTagService) {}

  @Query(() => [ItemTag], { name: 'itemTags' })
  findAll() {
    return this.itemTag.findAll();
  }
}
