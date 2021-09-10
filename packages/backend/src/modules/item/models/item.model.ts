import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from '../../common/base.model';
import { ItemLocalization } from './itemLocalization.model';

export enum ItemType {
  COUNTRY = 'COUNTRY',
  CITY = 'CITY',
  PLACE = 'PLACE',
  SIGHT = 'SIGHT',
}

export enum Locale {
  EN = 'EN',
  RU = 'RU',
}

registerEnumType(ItemType, {
  name: 'ItemType',
});

registerEnumType(Locale, {
  name: 'Locale',
});

@ObjectType()
export class Item extends BaseModel {
  @Field()
  type: ItemType;

  @Field()
  name: string;

  @Field({ nullable: true })
  overview: string;

  @Field({ defaultValue: 0 })
  wantedCount: number;

  @Field({ defaultValue: 0 })
  visitedCount: number;

  @Field({ defaultValue: 0 })
  reviewsCount: number;

  @Field(() => [String])
  photos: String[];

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field({ nullable: true })
  flag?: string;

  @Field(() => Locale)
  locale: Locale;

  @Field(() => [ItemLocalization], { nullable: true })
  localizations?: ItemLocalization[];
}
