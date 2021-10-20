import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GeonameService } from './geoname.service';
import { Geoname } from './models/geoname.model';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../user/user.decorator';
import { User } from '../user/models/user.model';
import { ActionGeonameInput } from './dto/action-geoname.input';
import { GeonamesInput } from './dto/geonames.input';
import { GeonameConnection } from './models/geoname-connection.model';
import { GeonameOrder } from './dto/geoname-order.input';

@Resolver(() => Geoname)
export class GeonameResolver {
  constructor(private readonly geoname: GeonameService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Geoname)
  addGeoname(
    @UserEntity() user: User,
    @Args('input') input: ActionGeonameInput,
  ) {
    return this.geoname.addGeoname(user, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Geoname)
  removeGeoname(
    @UserEntity() user: User,
    @Args('input') input: ActionGeonameInput,
  ) {
    return this.geoname.removeGeoname(user, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Geoname)
  moveGeoname(
    @UserEntity() user: User,
    @Args('input') input: ActionGeonameInput,
  ) {
    return this.geoname.moveGeoname(user, input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Geoname, { name: 'geoname' })
  findOne(@Args('id') id: string) {
    return this.geoname.findOne(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => GeonameConnection, { name: 'geonames' })
  findAll(
    @Args('input', { nullable: true }) input: GeonamesInput,
    @Args('skip', { nullable: true }) skip: number,
    @Args('after', { nullable: true }) after: string,
    @Args('before', { nullable: true }) before: string,
    @Args('first') first: number,
    @Args('last', { nullable: true }) last: number,
    @Args({ name: 'query', type: () => String, nullable: true })
    query: string,
    @Args({
      name: 'orderBy',
      type: () => GeonameOrder,
      nullable: true,
    })
    orderBy: GeonameOrder,
  ) {
    const pagination = { skip, after, before, first, last };
    return this.geoname.findAll(input, pagination, query, orderBy);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => GeonameConnection, { name: 'wanted' })
  wanted(
    @Args('skip', { nullable: true }) skip: number,
    @Args('after', { nullable: true }) after: string,
    @Args('before', { nullable: true }) before: string,
    @Args('first') first: number,
    @Args('last', { nullable: true }) last: number,
    @Args({
      name: 'orderBy',
      type: () => GeonameOrder,
      nullable: true,
    })
    orderBy: GeonameOrder,
    @Args('userId', { nullable: true }) userId: string,
    @UserEntity() user: User,
  ) {
    const pagination = { skip, after, before, first, last };
    return this.geoname.findWanted(pagination, orderBy, userId, user);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => GeonameConnection, { name: 'visited' })
  visited(
    @Args('skip', { nullable: true }) skip: number,
    @Args('after', { nullable: true }) after: string,
    @Args('before', { nullable: true }) before: string,
    @Args('first') first: number,
    @Args('last', { nullable: true }) last: number,
    @Args({
      name: 'orderBy',
      type: () => GeonameOrder,
      nullable: true,
    })
    orderBy: GeonameOrder,
    @Args('userId', { nullable: true }) userId: string,
    @UserEntity() user: User,
  ) {
    const pagination = { skip, after, before, first, last };
    return this.geoname.findVisited(pagination, orderBy, userId, user);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => GeonameConnection, { name: 'nearby' })
  nearby(
    @Args('skip', { nullable: true }) skip: number,
    @Args('after', { nullable: true }) after: string,
    @Args('before', { nullable: true }) before: string,
    @Args('first') first: number,
    @Args('last', { nullable: true }) last: number,
    @Args({
      name: 'orderBy',
      type: () => GeonameOrder,
      nullable: true,
    })
    orderBy: GeonameOrder,
    @UserEntity() user: User,
  ) {
    const pagination = { skip, after, before, first, last };
    return this.geoname.findNearby(pagination, orderBy, user);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => GeonameConnection, { name: 'popular' })
  popular(
    @Args('skip', { nullable: true }) skip: number,
    @Args('after', { nullable: true }) after: string,
    @Args('before', { nullable: true }) before: string,
    @Args('first') first: number,
    @Args('last', { nullable: true }) last: number,
    @Args({
      name: 'orderBy',
      type: () => GeonameOrder,
      nullable: true,
    })
    orderBy: GeonameOrder,
  ) {
    const pagination = { skip, after, before, first, last };
    return this.geoname.findPopular(pagination, orderBy);
  }
}
