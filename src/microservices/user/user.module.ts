import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { mongoUri } from "../../constants/mongo-uri";
import { UserSchema } from "./schemas/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]), 
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}