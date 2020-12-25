/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@nestjs/common';
import { SetLastSeenMutationVariables, UpdateUserMutationVariables } from 'apps/api/hasura-graphql';
import { GraphqlService } from '../graphql/graphql.service';
import { User } from './types';

@Injectable()
export class UserService {
  constructor(private readonly gqlService: GraphqlService) { }

  public async getMe(userId: string) {
    return (await this.gqlService.sdk.User({ userId })).users_by_pk;
  }

  public userById(userId: string) {
    return this.getMe(userId);
  }

  public async getUserByEmail(email: string) {
    return (
      await this.gqlService.sdk.UserByEmail({
        email
      })
    ).users[0];
  }

  public async createUser(createUserData) {
    const createdUser = (await this.gqlService.sdk.CreateUser(createUserData))
      .insert_users.returning[0];

    return createdUser;
  }

  public async setLastSeen(_id: string): Promise<void> {
    // try {
    const now = new Date();
    const vars: SetLastSeenMutationVariables = { id: _id, time: now };

    await this.gqlService.sdk.SetLastSeen(vars)


    // } catch (e) {

    // }
  }
  public async updateUser(updateUserData: UpdateUserMutationVariables) {
    // try {
    const isClockedIn = (await this.gqlService.sdk.UpdateUser(updateUserData))
      .update_users_by_pk;
    return isClockedIn;

    // } catch (e) {

    // }
  }
}
