import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "../../gateway/api/user/dto/create-user.dto";
import { UserDocument } from "./schemas/user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto)
  }
}