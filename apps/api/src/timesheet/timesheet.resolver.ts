import { UseGuards } from '@nestjs/common';
import {
  Mutation,
  Query,
  Resolver} from '@nestjs/graphql';
// import { Timesheets_Insert_Input } from 'apps/api/hasura-graphql';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { TimesheetService } from './timesheet.service';
import { Timesheet } from './types';
import { CurrentUser } from '../decorators/user.decorator';
import { User } from '../user/types';

@Resolver(() => Timesheet)
export class TimesheetResolver {
  public static TIMESHEET_NOT_FOUND = 'Timesheet Not Found';

  constructor(private readonly timesheetService: TimesheetService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Timesheet)
  async myTimesheets(@CurrentUser() user: User) {
    return await this.timesheetService.getMyTimesheets(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Timesheet)
  async punchCurrentUserClock(@CurrentUser() user: User) {
    const updatedUser = await this.timesheetService.punchCurrentUserClock(user);
    console.log(updatedUser);
    return {
      updatedUser
    };
  }
}
