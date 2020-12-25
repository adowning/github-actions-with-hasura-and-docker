import {
  Args,
  Mutation,
  Parent,
  Resolver,
  ResolveField, Subscription
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { Auth } from './types';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';
import { User } from '../user/types';

@Resolver(of => Auth)
export class AuthResolver {
  constructor(
    @Inject('PUB_SUB') private readonly $pubSub: PubSub,

    private readonly auth: AuthService) { }

  @Mutation(returns => Auth)
  async signup(@Args('data') data: SignupInput) {
    data.email = data.email.toLowerCase();
    const token = await this.auth.createUser(data);
    return {
      token
    };
  }

  @Mutation(returns => Auth)
  async login(@Args('data') { email, password }: LoginInput) {
    const token = await this.auth.login(email.toLowerCase(), password);
    const user = await this.auth.getUserFromToken(token);
    await this.$pubSub.publish('userLoggedIn', user);
    console.log(user.id)
    return {
      token
    };
  }

  @ResolveField('user')
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.token);
  }
  @Subscription(() => User, {
    resolve: payload => {
      console.log(payload)
      return payload
    },
  })
  async userLoggedIn() {
    console.log('x')
    return this.$pubSub.asyncIterator<User>('userLoggedIn');
  }
}
