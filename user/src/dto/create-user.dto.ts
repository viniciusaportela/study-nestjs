import { Roles } from '../@types/roles';

export class CreateUserDto {
  name: string;

  password: string;

  level: Roles;
}
