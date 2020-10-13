import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { json } from 'body-parser';

import { AppModule } from './app.module';
import config from './config';

import { HttpExceptionFilter } from './filters/http-exception.filter';
import { RpcExceptionFilter } from './filters/rpc-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new RpcExceptionFilter(httpAdapter), new HttpExceptionFilter());

  app.enableCors();
  app.use(json());

  await app.listen(config.gatewayPort);

  console.log('[gateway] OK');
}

bootstrap();
