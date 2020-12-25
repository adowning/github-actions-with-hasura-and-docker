import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/types';

@ObjectType()
export class BaseTimesheet {
  @Field()
  id: string;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;



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
