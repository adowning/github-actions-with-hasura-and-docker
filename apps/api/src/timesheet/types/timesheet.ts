import { ObjectType } from '@nestjs/graphql';
import { BaseTimesheet } from './BaseTimesheet';
import { TimesheetQuery } from '../../../hasura-graphql';

type TimesheetType = TimesheetQuery['timesheets_by_pk'];

@ObjectType()
export class Timesheet extends BaseTimesheet {}
