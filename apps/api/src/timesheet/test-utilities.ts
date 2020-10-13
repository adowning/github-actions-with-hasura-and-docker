import { CreateTimesheetMutationVariables } from '../../hasura-graphql';
import * as faker from 'faker';
import { GraphqlService } from '../graphql/graphql.service';
import { PasswordService } from '../auth/password.service';

export const createTimesheetMutationVariableFactory = (
  timesheetData: Partial<CreateTimesheetMutationVariables> = {}
) => ({
  userId: timesheetData.userId || (faker.internet.userId() as string)
  // role: timesheetData.role || 'ADMIN'
});

/**
 * Seeds a Timesheet in the `timesheets` table and returns the result
 *
 * @param service
 * @param timesheetData
 */
export const seedTimesheet = async (
  service: GraphqlService,
  timesheets: { id?: string; email?: string }[],
  timesheetData: CreateTimesheetMutationVariables = createTimesheetMutationVariableFactory()
) => {
  const pwService = new PasswordService();
  const start = await new Date();
  const timesheetDataToStore = {
    ...timesheetData,
    start: start
  };
  const timesheet = (await service.sdk.CreateTimesheet(timesheetDataToStore))
    .insert_timesheets.returning[0];
  timesheets.push(timesheet);
  return { ...timesheet };
};

/**
 * Removes a Timesheet from the `timesheets` table by id or email
 *
 * @param service
 * @param timesheetId
 */
export const clearTimesheet = async (
  service: GraphqlService,
  timesheetId: { id: string }
) => {
  return await service.sdk.DeleteTimesheetById({
    id: timesheetId.id
  });
};

/**
 * Purge all timesheets from an array of timesheets
 * @param service
 * @param timesheets
 */
export const purgeTimesheets = async (
  service: GraphqlService,
  timesheets: { id: string }[]
) => {
  while (timesheets.length > 0) {
    await clearTimesheet(service, timesheets.pop());
  }
};

// export const signupMutationFactory = ({
//   email,
//   password
// }: {
//   email?: string;
//   password?: string;
// }) => `mutation {
//         signup(
//           data: {
//             ${email ? `email: "${email}"` : ''}
//             ${password ? `password: "${password}"` : ''}
//           }
//         )
//         { token }
//       }`;
