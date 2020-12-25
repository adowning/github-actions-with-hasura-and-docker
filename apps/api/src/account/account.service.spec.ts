import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlModule } from '../graphql/graphql.module';
import { GraphqlService } from '../graphql/graphql.service';
import {
  createAccountMutationVariableFactory,
  purgeAccounts,
  seedAccount
} from './test-utilities';
import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;
  let gqlService: GraphqlService;

  const createdAccountPurgeArray = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GraphqlModule],
      providers: [AccountService]
    }).compile();

    service = module.get<AccountService>(AccountService);
    gqlService = module.get<GraphqlService>(GraphqlService);
  });

  afterAll(async () => {
    await purgeAccounts(gqlService, createdAccountPurgeArray);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAccount', () => {
    it('Throws when the email already exists', async () => {
      const existing = await seedAccount(gqlService, createdAccountPurgeArray);

      await expect(
        service.createAccount(
          createAccountMutationVariableFactory({ email: existing.email })
        )
      ).rejects.toThrow(
        `Uniqueness violation. duplicate key value violates unique constraint "accounts_email_key"`
      );
    });

    it('Creates the account', async () => {
      const accountData = createAccountMutationVariableFactory();

      const createAccountResult = await service.createAccount(accountData);

      // include in the accountPurgeArray
      createdAccountPurgeArray.push(createAccountResult);

      // validate the account exists
      const accountRecord = (
        await gqlService.sdk.AccountByEmail({
          email: createAccountResult.email
        })
      ).accounts[0];

      expect(accountRecord).toMatchObject(createAccountResult);
    });
  });
});
