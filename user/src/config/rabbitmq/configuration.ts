import { registerAs } from "@nestjs/config";

export default registerAs('rabbitMQ', () => ({
  host: process.env.RABBITMQ_HOST,
  password: process.env.RABBITMQ_PASSWORD,
  user: process.env.RABBITMQ_USER,
  uri: process.env.RABBITMQ_URI
}))