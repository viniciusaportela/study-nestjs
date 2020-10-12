import {
  ArgumentsHost,
  Catch,
  HttpException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class RpcExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log('rpcExceptionFilter ', exception)
    console.log('rpcExceptionFilter ', host)

    if (exception.microservice) {
      console.log('micro')
      const context = host.switchToHttp();
      const response = context.getResponse();
      
      const error = exception.error;
      const status = error.status || (error.getStatus && error.getStatus()) || 500

      response.status(status).json({
        statusCode: status,
        ...(typeof error.response === 'object' && error.response),
        message: (typeof error.response === 'string' ? error.response : undefined),
        timestamp: new Date().getTime(),
      })
    } else {
      console.log('default ', exception)
      super.catch(exception, host)
    }
  }
}
