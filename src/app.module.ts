import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { TaskModule } from './api/task/task.module';
import { UserModule } from './api/user/user.module';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const Config = new ConfigService(process.env.NODE_ENV);

@Module({
  imports: [
    MongooseModule.forRoot(Config.mongoUri), 
    UserModule,
    TaskModule
  ],
})
export class AppModule {}
