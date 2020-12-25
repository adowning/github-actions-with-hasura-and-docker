import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateTimesheetInput {
  @Field()
  @IsNotEmpty()
  users_id: string;

  // @Field()
  // @IsNotEmpty()
  // @MinLength(8)
  // password: string;
  @Field()
  start: Date;
}
