import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from './models/item.model';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../user/user.decorator';
import { AddItemInput } from './dto/add-item.input';
import { User } from '../user/models/user.model';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly item: ItemService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Item)
  addItem(@UserEntity() user: User, @Args('input') input: AddItemInput) {
    return this.item.addItem(user, input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Item], { name: 'items' })
  findAll() {
    return this.item.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Item], { name: 'wanted' })
  async wanted(@UserEntity() user: User) {
    return this.item.findWanted(user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Item], { name: 'visited' })
  async visited(@UserEntity() user: User) {
    return this.item.findVisited(user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Item], { name: 'countries' })
  findAllCountries() {
    return this.item.findAllCountries();
  }
}
