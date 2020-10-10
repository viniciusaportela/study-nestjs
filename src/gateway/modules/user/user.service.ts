import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateUserDto } from './dto/create-user.dto';
import { AuthenticateUserDto } from './dto/authenticate-user.dto';
import { UserPatterns } from '../../../microservices/modules/user/user.patterns';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  get(id: string) {
    return this.client.send(UserPatterns.GET, id);
  }

  create(createUserDto: CreateUserDto) {
    return this.client.send(UserPatterns.CREATE, createUserDto)
  }

  authenticate(authenticateUserDto: AuthenticateUserDto) {
    return this.client.send(UserPatterns.AUTHENTICATE, authenticateUserDto)
  }
}
