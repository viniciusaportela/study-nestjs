import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException, BadRequestException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log('catch http exception ', exception);

    const context = host.switchToHttp();
    const response = context.getResponse();
    const message = (exception.getResponse() as any).message
    let status = exception.getStatus();

    if (exception instanceof BadRequestException) {
      status = 422
    }

    response.status(status).json({
      statusCode: status,
      description: message,
      ...(exception.getResponse() && {description: exception.getResponse()}),
      timestamp: new Date().getTime(),
    });
  }
}
