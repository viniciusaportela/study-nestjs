import { HttpException, HttpStatus } from '@nestjs/common';

export class BadCredentialsException extends HttpException {
  constructor() {
    super(
      'You gave a wrong name/password combination',
      HttpStatus.FORBIDDEN,
    );
  }
}
