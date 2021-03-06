import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './graphql/user.resolver';

import { RabbitMqQueues } from '../../../constants/rabbit-mq-queues.enum';
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
  providers: [UserService, UserResolver]
})
export class UserModule {}
