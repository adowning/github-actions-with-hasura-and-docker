import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { AuthModule } from '../auth/auth.module';
import { Account } from './types';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

const accountServiceMock = jest.genMockFromModule<AccountService>('./account.service');

const fakeAccountResult: Account & { password: string } = {
  id: faker.random.uuid(),
  email: faker.internet.email(),
  password: faker.random.word(),
  // role: faker.random.arrayElement([Role.ADMIN, Role.USER]),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

describe('AccountResolver', () => {
  let resolver: AccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      providers: [AccountResolver, AccountService]
    })
      .overrideProvider(AccountService)
      .useValue(accountServiceMock)
      .compile();

    resolver = module.get<AccountResolver>(AccountResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('METHOD: me', () => {
    let matchingScenarios;

    it('Returns the corresponding account', async () => {
      const accountData = fakeAccountResult as Account;

      accountServiceMock.createAccount = jest.fn(async () => fakeAccountResult as any);

      accountServiceMock.getMe = jest.fn(async () => fakeAccountResult as any);

      const accountReturned = await resolver.me(accountData);

      expect(accountReturned).toMatchObject(fakeAccountResult);
    });
  });
});
