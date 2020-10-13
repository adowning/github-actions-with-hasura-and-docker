import { Module, forwardRef } from '@nestjs/common';
import { TimesheetService } from './timesheet.service';
import { GraphqlModule } from '../graphql/graphql.module';
import { TimesheetResolver } from './timesheet.resolver';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, GraphqlModule, forwardRef(() => AuthModule)],
  providers: [TimesheetService, TimesheetResolver],
  exports: [TimesheetService, TimesheetResolver]
})
export class TimesheetModule {}
