import { HttpException, HttpStatus } from "@nestjs/common";

export class MissingFieldException extends HttpException {
  constructor(fieldName: string) {
    super({name: 'MissingField', field: fieldName}, HttpStatus.UNPROCESSABLE_ENTITY)
  }
}