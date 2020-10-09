import { Roles, RolesStringArray } from '../../../@types/roles';
import { IsNotEmpty, IsString, IsIn, Validate } from 'class-validator';
import { IsStrongPassword } from '../../../custom-validators/isStrongPassword';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Validate(IsStrongPassword)
  password: string;
  
  @IsNotEmpty()
  @IsIn(RolesStringArray)
  level: Roles;
}
