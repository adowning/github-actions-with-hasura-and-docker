import { Module, forwardRef } from '@nestjs/common';
import { AccountService } from './account.service';
import { GraphqlModule } from '../graphql/graphql.module';
import { AccountResolver } from './account.resolver';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, GraphqlModule, forwardRef(() => AuthModule)],
  providers: [AccountService, AccountResolver],
  exports: [AccountService, AccountResolver]
})
export class AccountModule {}
