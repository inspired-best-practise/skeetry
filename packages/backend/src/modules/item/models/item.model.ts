import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from '../../common/base.model';
import { ItemTag } from './itemTag.model';

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

  @Field()
  description: string;

  @Field()
  photos: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  tags: ItemTag;

  @Field({ nullable: true })
  flag?: string;
}
