import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class RabbitMQConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('rabbitMQ.host')
  }

  get password(): string {
    return this.configService.get<string>('rabbitMQ.password')
  }

  get user(): string {
    return this.configService.get<string>('rabbitMQ.user')
  }

  get uri(): string {
    return this.configService.get<string>('rabbitMQ.uri')
  }
}