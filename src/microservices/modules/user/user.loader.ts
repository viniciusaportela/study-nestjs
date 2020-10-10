import { NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { RabbitMqQueues } from "../../../constants/rabbit-mq-queues";
import { rabbitMqUri } from "../../../constants/rabbit-mq-uri";
import { UserModule } from "./user.module";
import { MicroserviceExceptionFilter } from "../../filters/rpc-exception.filter";

export async function userLoader() {
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(UserModule, {
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