import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './models/city.model';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../user/user.decorator';
import { User } from '../user/models/user.model';
import { ActionCityInput } from './dto/action-city.input';
import { CitiesInput } from './dto/cities.input';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly city: CityService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => City)
  addCity(@UserEntity() user: User, @Args('input') input: ActionCityInput) {
    return this.city.addCity(user, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => City)
  removeCity(@UserEntity() user: User, @Args('input') input: ActionCityInput) {
    return this.city.removeCity(user, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => City)
  moveCity(@UserEntity() user: User, @Args('input') input: ActionCityInput) {
    return this.city.moveCity(user, input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => City, { name: 'city' })
  findOne(@Args('id') id: string) {
    return this.city.findOne(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [City], { name: 'cities' })
  findAll(@Args('input', { nullable: true }) input: CitiesInput) {
    return this.city.findAll(input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [City], { name: 'wanted' })
  async wanted(@UserEntity() user: User) {
    return this.city.findWanted(user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [City], { name: 'visited' })
  async visited(@UserEntity() user: User) {
    return this.city.findVisited(user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [City], { name: 'nearby' })
  async nearby() {
    return this.city.findNearby();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [City], { name: 'popular' })
  async popular() {
    return this.city.findPopular();
  }
}
