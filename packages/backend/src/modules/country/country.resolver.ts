import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './models/country.models';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly country: CountryService) {}

  @Query(() => [Country], { name: 'countries' })
  findAll() {
    return this.country.findAll();
  }

  @Query(() => Country, { name: 'country' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.country.findOne(id);
  }

  // @Mutation(() => Country)
  // updateCountry(@Args('input') input: UpdateCountryInput) {
  //   return this.country.update(input.id, input);
  // }
}
