import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';
import { BaseModel } from '../../common/base.model';
import { CityLocalization } from './cityLocalization.model';
import { Image } from '../../image/models/image.model';
import { State } from '../../state/models/state.model';

export enum CityType {
  COUNTRY = 'COUNTRY',
  CITY = 'CITY',
  PLACE = 'PLACE',
  SIGHT = 'SIGHT',
}

registerEnumType(CityType, {
  name: 'CityType',
});

@ObjectType()
export class City extends BaseModel {
  @Field()
  pk: number;

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

  @Field(() => [Image])
  images: Image[];

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  isCapital: boolean;

  @Field(() => [User], { nullable: true })
  userWanted: User[];

  @Field(() => [User], { nullable: true })
  userVisited: User[];

  @Field(() => State)
  state: State;

  @Field(() => [CityLocalization], { nullable: true })
  localizations?: CityLocalization[];
}
