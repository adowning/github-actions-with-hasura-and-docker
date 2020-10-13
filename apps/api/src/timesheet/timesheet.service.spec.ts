import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlModule } from '../graphql/graphql.module';
import { GraphqlService } from '../graphql/graphql.service';
import {
  createTimesheetMutationVariableFactory,
  purgeTimesheets,
  seedTimesheet
} from './test-utilities';
import { TimesheetService } from './timesheet.service';

describe('TimesheetService', () => {
  let service: TimesheetService;
  let gqlService: GraphqlService;

  const createdTimesheetPurgeArray = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GraphqlModule],
      providers: [TimesheetService]
    }).compile();

    service = module.get<TimesheetService>(TimesheetService);
    gqlService = module.get<GraphqlService>(GraphqlService);
  });

  afterAll(async () => {
    await purgeTimesheets(gqlService, createdTimesheetPurgeArray);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTimesheet', () => {
    it('Throws when the email already exists', async () => {
      const existing = await seedTimesheet(gqlService, createdTimesheetPurgeArray);

      await expect(
        service.createTimesheet(
          createTimesheetMutationVariableFactory({ email: existing.email })
        )
      ).rejects.toThrow(
        `Uniqueness violation. duplicate key value violates unique constraint "timesheets_email_key"`
      );
    });

    it('Creates the timesheet', async () => {
      const timesheetData = createTimesheetMutationVariableFactory();

      const createTimesheetResult = await service.createTimesheet(timesheetData);

      // include in the timesheetPurgeArray
      createdTimesheetPurgeArray.push(createTimesheetResult);

      // validate the timesheet exists
      const timesheetRecord = (
        await gqlService.sdk.TimesheetByEmail({
          email: createTimesheetResult.email
        })
      ).timesheets[0];

      expect(timesheetRecord).toMatchObject(createTimesheetResult);
    });
  });
});
