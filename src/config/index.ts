import {config} from 'dotenv';
import { join } from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
config({ path: join(__dirname, '../../.env.' + process.env.NODE_ENV) });

export default {
  secret: process.env.SECRET,

  gatewayPort: parseInt(process.env.GATEWAY_PORT),

  mongoHost: process.env.MONGO_HOST,
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
  mongoDatabase: process.env.MONGO_DATABASE,

  rabbitMqHost: process.env.RABBITMQ_HOST,
  rabbitMqPort: process.env.RABBITMQ_PORT,
  rabbitMqUser: process.env.RABBITMQ_USER,
  rabbitMqPassword: process.env.RABBITMQ_PASSWORD,
}