import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RabbitMqQueues } from '../../../constants/rabbit-mq-queues';
import { rabbitMqUri } from '../../../constants/rabbit-mq-uri';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'USER_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: [rabbitMqUri],
        queue: RabbitMqQueues.USER,
        queueOptions: {
          durable: false,
        }
      }
    }])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
