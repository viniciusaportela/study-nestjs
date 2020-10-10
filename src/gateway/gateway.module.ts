import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    UserModule
  ],
})
export class GatewayModule {}
