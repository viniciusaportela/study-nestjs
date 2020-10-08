import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { WeakPasswordException } from '../exceptions/weak-password.exception';

const weakPasswords = ['123', '123456', 'senha', 'password', 'abcde'];

@Injectable()
export class IsStrongPasswordPipe implements PipeTransform {
  transform(password: any, metadata: ArgumentMetadata) {
    if (weakPasswords.includes(password)) {
      throw new WeakPasswordException();
    }

    return password;
  }
}
