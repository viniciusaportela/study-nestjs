import dotenv from 'dotenv';
import { join } from 'path';

export class ConfigService {
  mongoHost: string;
  mongoUser: string;
  mongoPassword: string;
  mongoDatabase: string;

  rabbitMqUser: string;
  rabbitMqPassword: string;

  constructor(environment: string) {
    dotenv.config({ path: join(__dirname, '../../.env' + environment) });

    this.mongoHost = process.env.MONGO_HOST;
    this.mongoUser = process.env.MONGO_USER;
    this.mongoPassword = process.env.MONGO_PASSWORD;
    this.mongoDatabase = process.env.MONGO_DATABASE;

    this.rabbitMqUser = process.env.RABBITMQ_USER;
    this.rabbitMqPassword = process.env.RABBITMQ_PASSWORD;
  }
}
