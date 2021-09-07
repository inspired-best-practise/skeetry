import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field()
  @MinLength(11)
  @MaxLength(11)
  phone: string;

  @Field()
  username: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}