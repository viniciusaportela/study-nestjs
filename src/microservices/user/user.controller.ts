import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto
  ) {
    await this.service.create(createUserDto);
  }
}