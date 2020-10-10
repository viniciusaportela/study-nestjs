import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateUserDto } from './dto/create-user.dto';
import { AuthenticateUserDto } from './dto/authenticate-user.dto';
import { UserPatterns } from '../../../microservices/user/user.patterns';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  create(createUserDto: CreateUserDto) {
    return this.client.send(UserPatterns.CREATE, createUserDto)
  }

  authenticate(authenticateUserDto: AuthenticateUserDto) {
    return this.client.send(UserPatterns.AUTHENTICATE, authenticateUserDto)
    // const userByName = await this.userModel.findOne({name: authenticateUserDto.name})
    // const hashedProvidedPassword = MD5(authenticateUserDto.password).toString();

    // if (userByName) {
    //   if (userByName.password === hashedProvidedPassword) {
    //     const token = jwt.sign({name: userByName.name, roles: userByName.level, id: userByName._id}, this.config.secret)
    //     return token;
    //   } else {
    //     throw new BadCredentialsException();
    //   }
    // } else {
    //   throw new NotFoundException('This username was not registered yet');
    // }
  }
}
