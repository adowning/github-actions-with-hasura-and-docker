import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TimesheetQuery } from '../../../hasura-graphql';
import { User } from '../../user/types';

@ObjectType()
export class BaseTimesheet {
  @Field()
  id: string;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;

  @Field()
  user: User;

  @Field()
  start: Date;

  @Field()
  end: Date;

  @Field()
  isActive: Boolean;

  // @Field(type => Role)
  // role: Role;
}

// export enum Role {
//   ADMIN = 'ADMIN',
//   USER = 'USER'
// }

// registerEnumType(Role, {
//   name: 'Role',
//   description: 'Timesheet role'
// });
