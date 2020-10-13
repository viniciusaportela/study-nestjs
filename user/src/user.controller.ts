import { Controller } from "@nestjs/common";
import { MessagePattern } from '@nestjs/microservices';

import { AuthenticateUserDto } from "./dto/authenticate-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { RabbitMQPatterns } from "./constants/rabbit-mq-patterns.enum";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private service: UserService){}

  @MessagePattern(RabbitMQPatterns.GET)
  async getUser(id: string) {
    return await this.service.get(id);
  }

  @MessagePattern(RabbitMQPatterns.CREATE)
  async createUser(data: CreateUserDto) {
    console.log('createUser on user microservice')
    await this.service.create(data);
  }

  @MessagePattern(RabbitMQPatterns.AUTHENTICATE)
  async authenticateUser(data: AuthenticateUserDto) {
    return await this.service.authenticate(data);
  }
}