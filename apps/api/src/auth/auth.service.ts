import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PubSub } from 'graphql-subscriptions'

import { UserService } from '../user/user.service';
import { SignupInput } from './dto/signup.input';
import { PasswordService } from './password.service';
const pubSub = new PubSub();

@Injectable()
export class AuthService {
  constructor(
    @Inject('PUB_SUB') private readonly $pubSub: PubSub,

    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
    private readonly userService: UserService
  ) { }

  public async createUser(payload: SignupInput): Promise<string> {
    const existingUser = await this.userService.getUserByEmail(payload.email);

    if (existingUser) {
      throw new UnprocessableEntityException(
        `User already exists ${payload.email}`
      );
    }

    const hashedPassword = await this.passwordService.hashPassword(
      payload.password
    );

    const createdUser = await this.userService.createUser({
      // role: 'USER',
      ...payload,
      password: hashedPassword
    });

    return this.jwtService.sign({ userId: createdUser.id });
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await this.userService.getUserByEmail(email);
    console.log(user)
    if (!user) throw new UnprocessableEntityException(`Invalid Login`);

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    );

    if (!passwordValid) {
      throw new UnprocessableEntityException('Invalid Login');
    }

    this.userService.setLastSeen(user.id)
    pubSub.publish('UserLoggedInSubscription', user);
    await this.$pubSub.publish('UserLoggedInSubscription', user);

    return this.jwtService.sign({
      userId: user.id
    });
  }

  public async getUserFromToken(token: string) {
    const decoded = this.jwtService.decode(token);
    if (!decoded || !decoded['userId']) {
      return null;
    }
    const id = decoded['userId'];
    return await this.userService.userById(id);
  }
}
