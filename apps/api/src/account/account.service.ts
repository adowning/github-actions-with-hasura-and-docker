import { HasuraEvent, HasuraEventHandler } from '@golevelup/nestjs-hasura';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@nestjs/common';
import {
  UpdateUserMutationVariables
} from 'apps/api/hasura-graphql';
import { GraphqlService } from '../graphql/graphql.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly gqlService: GraphqlService,
    private readonly userService: UserService
  ) { }

  public async getAccount(accountId: string) {
    return (await this.gqlService.sdk.Account({ accountId }))
      .accounts_by_pk;
  }

  public accountById(accountId: string) {
    return this.getAccount(accountId);
  }

  public async getAccounts() {
    return await (await this.gqlService.sdk.AllAccounts()).accounts

    // public getMyAccounts(userId: string) {
    //   return this.getAccountsByUserId(userId);
  }


}
