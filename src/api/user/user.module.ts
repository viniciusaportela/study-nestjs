import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from '@nestjs/microservices';
import { ConfigModule } from '../../config/config.module';
import { UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]), 
    ConfigModule.register(),
    ClientModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
