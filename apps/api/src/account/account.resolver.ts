import { UseGuards } from '@nestjs/common';
import {
  Mutation,
  Query,
  Resolver
} from '@nestjs/graphql';
// import { Accounts_Insert_Input } from 'apps/api/hasura-graphql';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { AccountService } from './account.service';
import { Account } from './types';
import { CurrentUser } from '../decorators/user.decorator';
import { User } from '../user/types';

@Resolver(() => Account)
export class AccountResolver {
  public static TIMESHEET_NOT_FOUND = 'Account Not Found';

  constructor(private readonly accountService: AccountService) { }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Account])
  async allAccounts() {
    return await this.accountService.getAccounts()
  }

  // @UseGuards(GqlAuthGuard)
  // @Mutation(() => Account)
  // async punchCurrentUserClock(@CurrentUser() user: User) {
  //   const updatedUser = await this.accountService.punchCurrentUserClock(user);
  //   console.log(updatedUser);
  //   return {
  //     updatedUser
  //   };
  // }
}
