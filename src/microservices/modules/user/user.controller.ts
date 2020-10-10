import { Controller } from "@nestjs/common";
import { MessagePattern } from '@nestjs/microservices';
import { AuthenticateUserDto } from "../../../gateway/api/user/dto/authenticate-user.dto";
import { CreateUserDto } from "../../../gateway/api/user/dto/create-user.dto";
import { UserPatterns } from "./user.patterns";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private service: UserService){}

  @MessagePattern(UserPatterns.CREATE)
  async createUser(data: CreateUserDto) {
    await this.service.create(data);
  }

  @MessagePattern(UserPatterns.AUTHENTICATE)
  async authenticateUser(data: AuthenticateUserDto) {
    return await this.service.authenticate(data);
  }
}