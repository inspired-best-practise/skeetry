import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/base.model';

@ObjectType()
export class ItemTag extends BaseModel {
  @Field()
  name: string;

  @Field()
  emoji: string;
}
