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

  @Field({ nullable: true })
  iso2: string;

  @Field({ nullable: true })
  iso3: string;

  @Field({ nullable: true })
  numericCode: string;

  @Field({ nullable: true })
  phoneCode: string;

  @Field({ nullable: true })
  currency: string;

  @Field({ nullable: true })
  currencySymbol: string;

  @Field({ nullable: true })
  tld: string;

  @Field({ nullable: true })
  native?: string;

  @Field({ nullable: true })
  overview: string;

  @Field()
  continent: Continent;

  @Field({ nullable: true })
  subregion: string;

  @Field({ nullable: true })
  latitude: string;

  @Field({ nullable: true })
  longitude: string;

  @Field({ nullable: true })
  emoji?: string;

  @Field({ nullable: true })
  emojiU: string;

  @Field(() => [State], { nullable: true })
  states?: State[];

  @Field(() => [CountryLocalization], { nullable: true })
  localizations?: CountryLocalization[];
}
