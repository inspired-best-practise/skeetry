import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel, Locale } from '../../common/base.model';

@ObjectType()
export class ItemTagLocalization extends BaseModel {
  @Field(() => Locale)
  locale: Locale;

  @Field()
  name: string;
}
