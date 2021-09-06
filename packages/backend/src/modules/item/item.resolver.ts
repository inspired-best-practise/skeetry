import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './models/item.model';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly item: ItemService) {}

  @Mutation(() => Item)
  createItem(@Args('createItemInput') createItemInput: CreateItemInput) {
    return this.item.create(createItemInput);
  }

  @Query(() => [Item], { name: 'items' })
  findAll() {
    return this.item.findAll();
  }

  @Query(() => [Item], { name: 'countries' })
  findAllCountries() {
    return this.item.findAllCountries();
  }

  @Query(() => Item, { name: 'item' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.item.findOne(id);
  }

  @Mutation(() => Item)
  updateItem(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return this.item.update(updateItemInput.id, updateItemInput);
  }

  @Mutation(() => Item)
  removeItem(@Args('id', { type: () => Int }) id: number) {
    return this.item.remove(id);
  }
}
