import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'MAILER_SERVICE',
      transport: Transport.RMQ,
      options: {
        queue: 'mailer',
        queueOptions: {
          durable: false
        }
      }
    }
  ])]
})
export class MailerModule {

}