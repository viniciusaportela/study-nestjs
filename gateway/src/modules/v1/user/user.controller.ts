import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { AuthenticateUserDto } from './dto/authenticate-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { HashPasswordPipe } from './pipes/hash-password.pipe';
import { UserService } from './user.service';

@Controller('v1/users')
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  async create(
    @Body(HashPasswordPipe) createUserDto: CreateUserDto,
  ) {
    return this.service.create(createUserDto)
  }

  @Post('/authenticate')
  @HttpCode(200)
  async authenticate(
    @Body() authenticateUserDto: AuthenticateUserDto
  ) {
    return {
      token: await this.service.authenticate(authenticateUserDto).toPromise()
    };
  }
}
