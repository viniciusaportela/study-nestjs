import { HttpStatus, HttpException } from '@nestjs/common';

export class WeakPasswordException extends HttpException {
  constructor() {
    super(
      { name: 'WeakPassword', description: 'provide a stronger password' },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
