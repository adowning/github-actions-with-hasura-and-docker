import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseAccount {
  @Field()
  id: number;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;


}
