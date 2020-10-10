import { Roles, RolesStringArray } from '../../../../@types/roles';
import { IsNotEmpty, IsString, IsIn, Validate, IsHash } from 'class-validator';
import { IsStrongPassword } from '../../../custom-validators/isStrongPassword';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsHash('md5')
  @Validate(IsStrongPassword)
  password: string;
  
  @IsNotEmpty()
  @IsIn(RolesStringArray)
  level: Roles;
}
