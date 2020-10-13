import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './modules/v1/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: process.env.NODE_ENV !== 'production',
      debug: process.env.NODE_ENV !== 'production',
    }),
    UserModule
  ],
})
export class AppModule {}
