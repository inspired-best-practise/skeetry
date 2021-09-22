import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { State } from 'src/modules/state/models/state.model';
import { BaseModel } from '../../common/base.model';
import { CountryLocalization } from './countryLocalization.model';

export enum Continent {
  ASIA = 'ASIA',
  AFRICA = 'AFRICA',
  NORTH_AMERICA = 'NORTH_AMERICA',
  SOUTH_AMERICA = 'SOUTH_AMERICA',
  ANTARCTICA = 'ANTARCTICA',
  EUROPE = 'EUROPE',
  AUSTRALIA = 'AUSTRALIA',
}

registerEnumType(Continent, {
  name: 'Continent',
});

@ObjectType()
export class Country extends BaseModel {
  @Field()
  pk: number;

  @Field()
  name: string;

  @Field()
  iso2: string;

  @Field()
  iso3: string;

  @Field()
  numericCode: string;

  @Field()
  phoneCode: string;

  @Field()
  currency: string;

  @Field()
  currencySymbol: string;

  @Field()
  tld: string;

  @Field()
  native: string;

  @Field({ nullable: true })
  overview: string;

  @Field()
  continent: Continent;

  @Field()
  subregion: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field({ nullable: true })
  emoji?: string;

  @Field()
  emojiU: string;

  @Field(() => [State], { nullable: true })
  states?: State[];

  @Field(() => [CountryLocalization], { nullable: true })
  localizations?: CountryLocalization[];
}
