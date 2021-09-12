import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';
import { BaseModel, Locale } from '../../common/base.model';
import { ItemLocalization } from './itemLocalization.model';

export enum ItemType {
  COUNTRY = 'COUNTRY',
  CITY = 'CITY',
  PLACE = 'PLACE',
  SIGHT = 'SIGHT',
}

registerEnumType(ItemType, {
  name: 'ItemType',
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

  @Field(() => [User], { nullable: true })
  userWanted: User[];

  @Field(() => [User], { nullable: true })
  userVisited: User[];

  @Field(() => Locale)
  locale: Locale;

  @Field(() => [ItemLocalization], { nullable: true })
  localizations?: ItemLocalization[];
}
