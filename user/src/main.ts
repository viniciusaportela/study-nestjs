import { NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { RabbitMqQueues } from "./constants/rabbit-mq-queues";
import { rabbitMqUri } from "./constants/rabbit-mq-uri";
import { AppModule } from "./app.module";
import { MicroserviceExceptionFilter } from "./filters/rpc-exception.filter";

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [rabbitMqUri],
      queue: RabbitMqQueues.USER,
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