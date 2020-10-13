import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserQuery } from '../../../hasura-graphql';
import { Timesheet } from '../../timesheet/types';

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
