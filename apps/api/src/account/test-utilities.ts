import { CreateAccountMutationVariables } from '../../hasura-graphql';
import * as faker from 'faker';
import { GraphqlService } from '../graphql/graphql.service';
import { PasswordService } from '../auth/password.service';

export const createAccountMutationVariableFactory = (
  accountData: Partial<CreateAccountMutationVariables> = {}
) => ({
  account_name: accountData.account_name || (faker.word.name as string),
  // role: accountData.role || 'ADMIN'
});

/**
 * Seeds a Account in the `accounts` table and returns the result
 *
 * @param service
 * @param accountData
 */
export const seedAccount = async (
  service: GraphqlService,
  accounts: { id?: string; account_name?: string }[],
  accountData: CreateAccountMutationVariables = createAccountMutationVariableFactory()
) => {
  const accountDataToStore = {
    ...accountData,
  };
  const account = (await service.sdk.CreateAccount(accountDataToStore)).insert_accounts
    .returning[0];
  accounts.push(account);
  return { ...account };
};

/**
 * Removes a Account from the `accounts` table by id or email
 *
 * @param service
 * @param accountId
 */
export const clearAccount = async (
  service: GraphqlService,
  accountId: { id: string }
) => {
  return await service.sdk.DeleteAccountById({
    id: accountId.id
  });
};

/**
 * Purge all accounts from an array of accounts
 * @param service
 * @param accounts
 */
export const purgeAccounts = async (
  service: GraphqlService,
  accounts: { id: string }[]
) => {
  while (accounts.length > 0) {
    await clearAccount(service, accounts.pop());
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
