import { HttpException, HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class BadCredentialsException extends RpcException {
  constructor() {
    super(new HttpException('You gave a wrong name/password combination', HttpStatus.UNAUTHORIZED))
  }
}