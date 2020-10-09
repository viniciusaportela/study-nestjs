import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { MD5 } from 'crypto-js';

import { UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthenticateUserDto } from './dto/authenticate-user.dto';
import { BadCredentialsException } from './exceptions/bad-credentials.exception';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>, private config: ConfigService) {}

  async create(createUserDto: CreateUserDto) {
    await this.userModel.create(createUserDto);
  }

  async authenticate(authenticateUserDto: AuthenticateUserDto) {
    const userByName = await this.userModel.findOne({name: authenticateUserDto.name})
    const hashedProvidedPassword = MD5(authenticateUserDto.password).toString();

    if (userByName) {
      if (userByName.password === hashedProvidedPassword) {
        const token = jwt.sign({name: userByName.name, roles: userByName.level, id: userByName._id}, this.config.secret)
        return token;
      } else {
        throw new BadCredentialsException();
      }
    } else {
      throw new NotFoundException('This username was not registered yet');
    }

  }
}
