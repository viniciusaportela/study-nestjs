import * as jwt from 'jsonwebtoken';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MD5 } from "crypto-js";
import { Model } from "mongoose";

import { AuthenticateUserDto } from "../../../gateway/api/user/dto/authenticate-user.dto";
import { CreateUserDto } from "../../../gateway/api/user/dto/create-user.dto";
import { UserDocument } from "./schemas/user.schema";
import config from '../../../config';
import { BadCredentialsException } from './exceptions/bad-credentials.exception';
import { NotFoundException } from '../../exceptions/not-found.exception';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto)
  }

  async authenticate(authenticateUserDto: AuthenticateUserDto) {
    const userByName = await this.userModel.findOne({name: authenticateUserDto.name})
    const hashedProvidedPassword = MD5(authenticateUserDto.password).toString();

    if (userByName) {
      if (userByName.password === hashedProvidedPassword) {
        const token = jwt.sign({name: userByName.name, roles: userByName.level, id: userByName._id}, config.secret)
        return token;
      } else {
        throw new BadCredentialsException();
      }
    } else {
      throw new NotFoundException()
    }
  }
}