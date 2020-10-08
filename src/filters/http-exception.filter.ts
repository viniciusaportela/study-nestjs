import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const status = exception.getStatus();

    console.log('exception ', exception);
    console.log('exception.message', exception.message);

    response.status(status).json({
      statusCode: status,
      description: exception.message,
      timestamp: new Date().toLocaleDateString('pt-BR'),
    });
  }
}
