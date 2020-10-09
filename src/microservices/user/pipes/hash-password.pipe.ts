import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { MD5 } from 'crypto-js';

export class HashPasswordPipe implements PipeTransform {
  transform(password: any, metadata: ArgumentMetadata) {
    return MD5('202cb962ac59075b964b07152d234b70').toString()
  }
}
