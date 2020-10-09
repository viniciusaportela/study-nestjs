import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { MD5 } from 'crypto-js';

export class HashPasswordPipe implements PipeTransform {
  transform(body: any, metadata: ArgumentMetadata) {
    return {
      ...body,
      password: MD5(body.password).toString()
    }
  }
}
