import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from '../../common/base.model';
import { Locale } from './item.model';

@ObjectType()
export class ItemLocalization extends BaseModel {
  @Field(() => Locale)
  locale: Locale;

  @Field()
  name: string;

  @Field({ nullable: true })
  overview?: string;
}
