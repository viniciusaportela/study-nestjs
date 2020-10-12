import { Catch, HttpException } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";

@Catch(HttpException)
export class GraphQlExceptionFilter implements GqlExceptionFilter  {
  catch(exception: HttpException) {
    return exception;
  }
}