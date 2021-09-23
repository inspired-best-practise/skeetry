import { City } from './../../city/models/city.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/base.model';
import { StateLocalization } from './stateLocalization.model';
import { Country } from '../../country/models/country.models';

@ObjectType()
export class State extends BaseModel {
  @Field()
  pk: number;

  @Field()
  name: string;

  @Field()
  stateCode: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  overview: string;

  @Field(() => [City], { nullable: true })
  cities: City[];

  @Field(() => Country)
  country: Country;

  @Field(() => [StateLocalization], { nullable: true })
  localizations: StateLocalization[];
}