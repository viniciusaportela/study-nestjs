import { Roles, RolesStringArray } from '../../../@types/roles';
import { IsNotEmpty, IsString, IsIn, IsHash } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsHash('md5')
  password: string;
  
  @IsNotEmpty()
  @IsIn(RolesStringArray)
  level: Roles;
}
