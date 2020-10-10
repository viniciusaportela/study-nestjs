import { Controller } from "@nestjs/common";
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from "../../gateway/api/user/dto/create-user.dto";
import { UserPatterns } from "./user.patterns";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private service: UserService){}

  @MessagePattern({cmd: UserPatterns.CREATE})
  async createUser(data: CreateUserDto) {
    return await this.service.create(data);
  }
}