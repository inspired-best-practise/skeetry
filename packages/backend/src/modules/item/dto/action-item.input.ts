import { InputType, Field, ID, registerEnumType } from '@nestjs/graphql';

export enum AddItemInputType {
  WANT = 'WANT',
  VISITED = 'VISITED',
}

registerEnumType(AddItemInputType, {
  name: 'AddItemInputType',
});

@InputType()
export class ActionItemInput {
  @Field(() => ID)
  id: string;

  @Field()
  type: AddItemInputType;
}
