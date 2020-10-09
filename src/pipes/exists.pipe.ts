import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { MissingFieldException } from "../exceptions/missing-field.exception";

export class ExistsPipe implements PipeTransform {
  field: string;

  constructor(field: string) {
    this.field = field;
  }

  transform(value: any, metadata: ArgumentMetadata) {
    if (value) {
      return value;
    } else {
      throw new MissingFieldException(this.field)
    }
  }
}