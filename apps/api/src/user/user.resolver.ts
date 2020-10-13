import { UseGuards } from '@nestjs/common';
import {
  Query,
  Resolver} from '@nestjs/graphql';
import { CurrentUser } from '../decorators/user.decorator';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { UserService } from './user.service';
import { User } from './types';

@Resolver(() => User)
export class UserResolver {
  public static USER_NOT_FOUND = 'User Not Found';

  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@CurrentUser() user: User) {
    return await this.userService.getMe(user.id);
  }
}
