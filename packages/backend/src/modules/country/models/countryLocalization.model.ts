import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel, Locale } from '../../common/base.model';

@ObjectType()
export class CountryLocalization extends BaseModel {
  @Field(() => Locale)
  locale: Locale;

  @Field()
  name: string;

  @Field({ nullable: true })
  overview?: string;
}
