import { HttpException, HttpStatus } from '@nestjs/common';

export class BadCredentialsException extends HttpException {
  constructor() {
    super(
      {
        name: 'BadCredentials',
        description: 'You gave a wrong name/password combination',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
