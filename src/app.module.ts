import dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './microservices/user/user.controller';
import { UserService } from './microservices/user/user.service';

dotenv.config();

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;

@Module({
  imports: [MongooseModule.forRoot(mongoUri)],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
