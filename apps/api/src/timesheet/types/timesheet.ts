import { Field, ObjectType } from '@nestjs/graphql';
import { BaseTimesheet } from './BaseTimesheet';
import { TimesheetQuery } from '../../../hasura-graphql';
import { User } from '../../user/types';

type TimesheetType = TimesheetQuery['timesheets_by_pk'];

@ObjectType()
export class Timesheet extends BaseTimesheet {
  @Field()
  usersByUsersId: User
  @Field()
  users_id: string
  @Field()
  start: Date

  @Field()
  end: Date

  @Field()
  isActive: boolean
}
