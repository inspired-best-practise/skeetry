import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel, Locale } from '../../common/base.model';
import { State } from './state.model';

@ObjectType()
export class StateLocalization extends BaseModel {
  @Field()
  locale: Locale;

  @Field()
  name: string;

  @Field()
  overview: string;

  @Field(() => State)
  state: State;
}
