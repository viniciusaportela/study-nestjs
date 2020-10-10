import { Controller } from "@nestjs/common";
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from "../../gateway/api/user/dto/create-user.dto";
import { UserPatterns } from "./user.patterns";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private service: UserService){}

  @MessagePattern(UserPatterns.CREATE)
  async createUser(data: CreateUserDto) {
    await this.service.create(data);
  }
}