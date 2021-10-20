import { InputType, Field, ID, registerEnumType } from '@nestjs/graphql';

export enum AddGeonameInputType {
  WANT = 'WANT',
  VISITED = 'VISITED',
}

registerEnumType(AddGeonameInputType, {
  name: 'AddGeonameInputType',
});

@InputType()
export class ActionGeonameInput {
  @Field(() => ID)
  id: string;

  @Field()
  type: AddGeonameInputType;
}
