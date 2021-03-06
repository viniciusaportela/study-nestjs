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
    const context = host.switchToHttp();
    const response = context.getResponse();
    let status = exception.getStatus();

    if (exception instanceof BadRequestException) {
      status = 422
    }

    response.status(status).json({
      statusCode: status,
      ...(exception.getResponse && exception.getResponse()),
      timestamp: new Date().getTime(),
    });
  }
}
