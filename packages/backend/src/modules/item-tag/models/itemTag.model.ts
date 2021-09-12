import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel, Locale } from '../../common/base.model';
import { ItemTagLocalization } from './itemTagLocalization.model';

@ObjectType()
export class ItemTag extends BaseModel {
  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field()
  locale: Locale;

  @Field(() => [ItemTagLocalization], { nullable: true })
  localizations?: ItemTagLocalization[];
}
