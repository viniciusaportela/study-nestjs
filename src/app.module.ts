import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { TaskModule } from './microservices/task/task.module';
import { UserModule } from './microservices/user/user.module';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const Config = new ConfigService(process.env.NODE_ENV);

const mongoUri = `mongodb://${Config.mongoUser}:${Config.mongoPassword}@${Config.mongoHost}/${Config.mongoDatabase}`;

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri), 
    UserModule,
    TaskModule
  ],
})
export class AppModule {}
