import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { AuthModule } from '../auth/auth.module';
import { Timesheet } from './types';
import { TimesheetResolver } from './timesheet.resolver';
import { TimesheetService } from './timesheet.service';

const timesheetServiceMock = jest.genMockFromModule<TimesheetService>('./timesheet.service');

const fakeTimesheetResult: Timesheet & { password: string } = {
  id: faker.random.uuid(),
  email: faker.internet.email(),
  password: faker.random.word(),
  // role: faker.random.arrayElement([Role.ADMIN, Role.USER]),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

describe('TimesheetResolver', () => {
  let resolver: TimesheetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      providers: [TimesheetResolver, TimesheetService]
    })
      .overrideProvider(TimesheetService)
      .useValue(timesheetServiceMock)
      .compile();

    resolver = module.get<TimesheetResolver>(TimesheetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('METHOD: me', () => {
    let matchingScenarios;

    it('Returns the corresponding timesheet', async () => {
      const timesheetData = fakeTimesheetResult as Timesheet;

      timesheetServiceMock.createTimesheet = jest.fn(async () => fakeTimesheetResult as any);

      timesheetServiceMock.getMe = jest.fn(async () => fakeTimesheetResult as any);

      const timesheetReturned = await resolver.me(timesheetData);

      expect(timesheetReturned).toMatchObject(fakeTimesheetResult);
    });
  });
});
