import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { TreatPasswordPipe } from './pipes/compose/treat-password.pipe';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  async create(
    @Body('name') name: string,
    @Body('password', ...TreatPasswordPipe) password: string,
  ) {
    await this.service.create({ name, password });
  }
}
