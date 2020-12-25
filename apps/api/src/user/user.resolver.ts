import { Inject, UseGuards } from '@nestjs/common';
import {
  Args,
  Query,
  Resolver,
  Subscription
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions'
import { CurrentUser } from '../decorators/user.decorator';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { UserService } from './user.service';
import { User } from './types';
@Resolver(() => User)
export class UserResolver {
  public static USER_NOT_FOUND = 'User Not Found';

  constructor(
    @Inject('PUB_SUB') private readonly $pubSub: PubSub,

    private readonly userService: UserService) { }

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@CurrentUser() user: User) {
    return await this.userService.getMe(user.id);
  }


}
