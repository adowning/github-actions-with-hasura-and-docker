import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseUser {
  @Field()
  id: string;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;

  @Field()
  email: string;

  @Field()
  activeTimesheetId: string;

  // @Field(type => Role)
  // role: Role;
}

// export enum Role {
//   ADMIN = 'ADMIN',
//   USER = 'USER'
// }

// registerEnumType(Role, {
//   name: 'Role',
//   description: 'User role'
// });
