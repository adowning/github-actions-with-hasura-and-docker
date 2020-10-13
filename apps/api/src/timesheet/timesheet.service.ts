import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import {
  UpdateTimesheetMutationVariables,
  UpdateUserMutationVariables
} from 'apps/api/hasura-graphql';
import { GraphqlService } from '../graphql/graphql.service';
import { UserService } from '../user/user.service';
import { CreateTimesheetInput } from './dto/createTimesheet_input';
import { Timesheet } from './types';

@Injectable()
export class TimesheetService {
  constructor(
    private readonly gqlService: GraphqlService,
    private readonly userService: UserService
  ) {}

  public async getTimesheet(timesheetId: string) {
    return (await this.gqlService.sdk.Timesheet({ timesheetId }))
      .timesheets_by_pk;
  }

  public timesheetById(timesheetId: string) {
    return this.getTimesheet(timesheetId);
  }

  public async getTimesheetsByUserId(userId: string) {
    return (await this.gqlService.sdk.TimesheetsByUserId({ userId }))
      .timesheets;
  }

  public getMyTimesheets(userId: string) {
    return this.getTimesheetsByUserId(userId);
  }

  public async punchCurrentUserClock(currentUser) {
    const vars: UpdateUserMutationVariables = { id: currentUser.id };

    if (currentUser.activeTimesheetId == null) {
      const createdTimesheet = (
        await this.gqlService.sdk.CreateTimesheet({ userId: currentUser.id })
      ).insert_timesheets.returning[0];
      vars.activeTimesheetId = createdTimesheet.id;
      await this.userService.updateUser(vars);
      return createdTimesheet;
    } else {
      vars.activeTimesheetId = null;
      await this.userService.updateUser(vars);
      const timesheetVars: UpdateTimesheetMutationVariables = {
        id: currentUser.activeTimesheetId
      };
      timesheetVars.end = new Date();
      const updatedTimesheet = (
        await this.gqlService.sdk.UpdateTimesheet(timesheetVars)
      ).update_timesheets_by_pk;
      return updatedTimesheet;
    }
  }
}
