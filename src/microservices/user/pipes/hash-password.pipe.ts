import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import CryptoJs from 'crypto-js';

export class HashPasswordPipe implements PipeTransform {
  transform(password: any, metadata: ArgumentMetadata) {
    return CryptoJs.MD5(password).toString(CryptoJs.enc.Utf8);
  }
}
