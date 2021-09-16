import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Item } from '../../../modules/item/models/item.model';
import { BaseModel, Locale } from '../../common/base.model';
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
  name: string;

  @Field({ nullable: true })
  overview: string;

  @Field()
  continent: Continent;

  @Field({ nullable: true })
  flag?: string;

  @Field(() => Locale)
  locale: Locale;

  @Field(() => [CountryLocalization], { nullable: true })
  localizations?: CountryLocalization[];

  @Field(() => [Item], { nullable: true })
  item?: Item[];
}
