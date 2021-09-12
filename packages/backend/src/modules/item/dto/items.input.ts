import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class ItemsInput {
  @Field(() => ID)
  itemTagId: string;
}
