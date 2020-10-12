import { IsHash, IsNotEmpty, IsString } from "class-validator";

export class AuthenticateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsHash('md5')
  password: string;
}