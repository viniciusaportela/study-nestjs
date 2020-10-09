import * as dotenv from 'dotenv';
import { join } from 'path';

export class ConfigService {
  secret: string;

  mongoHost: string;
  mongoUser: string;
  mongoPassword: string;
  mongoDatabase: string;
  mongoUri: string;

  rabbitMqHost: string;
  rabbitMqPort: string;
  rabbitMqUser: string;
  rabbitMqPassword: string;
  rabbitMqUri: string;

  constructor(environment: string) {
    dotenv.config({ path: join(__dirname, '../../.env.' + environment) });

    this.secret = process.env.SECRET;

    this.mongoHost = process.env.MONGO_HOST;
    this.mongoUser = process.env.MONGO_USER;
    this.mongoPassword = process.env.MONGO_PASSWORD;
    this.mongoDatabase = process.env.MONGO_DATABASE;
    this.mongoUri = `mongodb://${this.mongoUser}:${this.mongoPassword}@${this.mongoHost}/${this.mongoDatabase}`;

    this.rabbitMqHost = process.env.RABBITMQ_HOST;
    this.rabbitMqPort = process.env.RABBITMQ_PORT;
    this.rabbitMqUser = process.env.RABBITMQ_USER;
    this.rabbitMqPassword = process.env.RABBITMQ_PASSWORD;
    this.rabbitMqUri = `amqp://${this.rabbitMqUser}:${this.rabbitMqPassword}@${this.rabbitMqHost}`
  }
}
