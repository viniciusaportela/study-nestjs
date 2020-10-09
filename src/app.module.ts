import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './microservices/user/user.module';

// const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;
const mongoUri = `mongodb://root:viarpo01@localhost/example`;

@Module({
  imports: [MongooseModule.forRoot(mongoUri), UserModule],
})
export class AppModule {}
