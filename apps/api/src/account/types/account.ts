import { Field, ObjectType } from '@nestjs/graphql';
import { BaseAccount } from './BaseAccount';
import { AccountQuery } from '../../../hasura-graphql';

type AccountType = AccountQuery['accounts_by_pk'];

@ObjectType()
export class Account extends BaseAccount {
    @Field()
    account_name: string;

    @Field()
    phone_list: string;

    @Field()
    email: string;

    @Field()
    search_address: string;

}
