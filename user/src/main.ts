import './utils/set-default-env';
import { NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { RabbitMQQueues } from "./constants/rabbit-mq-queues.enum";

import { AppModule } from "./app.module";
import { MicroserviceExceptionFilter } from "./filters/rpc-exception.filter";
import { RabbitMQConfigModule } from "./config/rabbitmq/config.module";
import { RabbitMQConfigService } from "./config/rabbitmq/config.service";

async function bootstrap() {
  const configApp = await NestFactory.create(RabbitMQConfigModule);
  const config = configApp.get<RabbitMQConfigService>('RabbitMQConfigService');

  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [config.uri],
      queue: RabbitMQQueues.USER,
      queueOptions: {
        durable: false,
      }
    }
  })
  microservice.useGlobalFilters(new MicroserviceExceptionFilter())
  microservice.listen(() => {
    console.log('[userMicroservice] OK')
  })
}

bootstrap();