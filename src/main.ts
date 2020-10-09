/* eslint-disable @typescript-eslint/no-empty-function */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { json } from 'body-parser';
import * as cors from 'cors';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const Config = new ConfigService(process.env.NODE_ENV)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [Config.rabbitMqUri],
  //     queue: 'mailer',
  //     queueOptions: {
  //       durable: false,
  //     }
  //   }
  // })

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(json());
  app.use(cors());

  await app.listen(3000);

  console.log('NestJS started on port 3000');
}

bootstrap();
