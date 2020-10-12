import { NotFoundException as HttpNotFoundException } from '@nestjs/common';
import { RpcException } from "@nestjs/microservices";

export class NotFoundException extends RpcException {
  constructor() {
    super(new HttpNotFoundException())
  }
}