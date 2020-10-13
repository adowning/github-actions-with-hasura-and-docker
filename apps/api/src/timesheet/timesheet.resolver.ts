import { ExecutionContext, Inject, UseGuards } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
  Subscription
} from '@nestjs/graphql';
// import { Timesheets_Insert_Input } from 'apps/api/hasura-graphql';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { TimesheetService } from './timesheet.service';
import { Timesheet } from './types';
import { CreateTimesheetInput } from './dto/createTimesheet_input';
import { CurrentUser } from '../decorators/user.decorator';
import { User } from '../user/types';

@Resolver(of => Timesheet)
export class TimesheetResolver {
  public static TIMESHEET_NOT_FOUND = 'Timesheet Not Found';

  constructor(private readonly timesheetService: TimesheetService) {}

  @UseGuards(GqlAuthGuard)
  @Query(returns => Timesheet)
  async myTimesheets(@CurrentUser() user: User) {
    return await this.timesheetService.getMyTimesheets(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(returns => Timesheet)
  async punchCurrentUserClock(@CurrentUser() user: User) {
    const updatedUser = await this.timesheetService.punchCurrentUserClock(user);
    console.log(updatedUser);
    return {
      updatedUser
    };
  }
}
