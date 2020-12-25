import { HasuraInsertEvent, TrackedHasuraEventHandler } from '@golevelup/nestjs-hasura';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@nestjs/common';
import {
  UpdateTimesheetMutationVariables,
  UpdateUserMutationVariables
} from 'apps/api/hasura-graphql';
import { GraphqlService } from '../graphql/graphql.service';
import { UserService } from '../user/user.service';
import { Timesheet } from './types';

@Injectable()
export class TimesheetService {
  constructor(
    private readonly gqlService: GraphqlService,
    private readonly userService: UserService
  ) {}

  public async getTimesheet(timesheetId: string) {
    return (await this.gqlService.sdk.Timesheet({ timesheetId }))
      .timesheets_by_pk
  }

  public timesheetById(timesheetId: string) {
    return this.getTimesheet(timesheetId)
  }

  public async getTimesheetsByusers_id(users_id: string) {
    return (await this.gqlService.sdk.TimesheetsByUserId({ users_id }))
      .timesheets
  }

  public getMyTimesheets(users_id: string) {
    return this.getTimesheetsByusers_id(users_id)
  }

  public async punchCurrentUserClock(currentUser) {
    const vars: UpdateUserMutationVariables = { id: currentUser.id }

    if (currentUser.active_timesheet_id == null) {
      const createdTimesheet = (
        await this.gqlService.sdk.CreateTimesheet({ users_id: currentUser.id })
      ).insert_timesheets.returning[0]
      vars.active_timesheet_id = createdTimesheet.id
      await this.userService.updateUser(vars)
      return createdTimesheet
    } else {
      vars.active_timesheet_id = null
      await this.userService.updateUser(vars)
      const timesheetVars: UpdateTimesheetMutationVariables = {
        id: currentUser.active_timesheet_id,
      }
      timesheetVars.end = new Date()
      const updatedTimesheet = (
        await this.gqlService.sdk.UpdateTimesheet(timesheetVars)
      ).update_timesheets_by_pk
      return updatedTimesheet
    }
  }
  @TrackedHasuraEventHandler({
    triggerName: 'timesheet-created',
    tableName: 'timesheet',
    definition: { type: 'insert' },
  })
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleTimesheetCreated(evt: HasuraInsertEvent<Timesheet>) {
    console.log(evt)
  }
}
