import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { AccountModule } from '../account/account.module';
import { UserModule } from '../user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TimesheetModule } from '../timesheet/timesheet.module';
import { HasuraModule } from '@golevelup/nestjs-hasura';
import { SearchModule } from '../search/search.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    // HasuraModule.forRoot(HasuraModule, {
    //   secretFactory: 'asdfasdf',
    //   secretHeader: 'asdfasdf',
    //   controllerPrefix: 'something', // this is optional. defaults to hasura
    // }),
    ConfigModule,
    HasuraModule.forRoot(HasuraModule, {
      webhookConfig: {
        secretFactory: "asdfasdf",
        secretHeader: "asdfasfd",
        // },
      },
      managedMetaDataConfig: {
        dirPath: join(process.cwd(), 'hasura/metadata'),
        secretHeaderEnvName: 'HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE',
        nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
        defaultEventRetryConfig: {
          intervalInSeconds: 15,
          numRetries: 3,
          timeoutInSeconds: 100,
          toleranceSeconds: 21600,
        },
      },
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // resolvers: { JSON: GraphQLJSON },
      debug: true,
      playground: true,
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
      subscriptions: {
        onConnect: (connectionParams: any, websocket, context) => {
          context.request.headers.authorization = connectionParams?.Authorization
          console.log(context.request.headers)
        },
        onDisconnect: (ws, context) => {
          console.log('subscription onDisconnect');
        }
      }
    }),
    AuthModule,
    SearchModule,
    AccountModule,
    UserModule,
    TimesheetModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
