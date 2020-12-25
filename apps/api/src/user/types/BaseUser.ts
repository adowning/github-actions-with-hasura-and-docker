import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseUser {
  @Field()
  id: string

  @Field()
  created_at: string

  @Field()
  updated_at: string

  @Field()
  email: string

  @Field()
  active_timesheet_id?: string

  @Field()
  is_logged_in: boolean

  @Field()
  last_seen: Date

  @Field()
  password: string
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
