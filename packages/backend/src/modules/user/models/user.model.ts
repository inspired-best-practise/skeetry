import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/base.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  phone: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  avatar: string;

  @Field({ defaultValue: 0 })
  wantedCount: number;

  @Field({ defaultValue: 0 })
  visitedCount: number;

  @HideField()
  password: string;
}
