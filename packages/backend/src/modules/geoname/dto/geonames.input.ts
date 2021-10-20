import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class GeonamesInput {
  @Field(() => ID)
  geonameTagId: string;
}
