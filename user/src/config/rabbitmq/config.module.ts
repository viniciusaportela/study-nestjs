import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as Joi from '@hapi/joi';
import { join } from "path";

import { RabbitMQConfigService } from "./config.service";
import configuration from "./configuration";

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    envFilePath: join(__dirname, '../../../.env.' + process.env.NODE_ENV),
    expandVariables: true,
    validationSchema: Joi.object({
      RABBITMQ_HOST: Joi.string().default('localhost'),
      RABBITMQ_PASSWORD: Joi.string().default('guest'),
      RABBITMQ_USER: Joi.string().default('guest'),
      RABBITMQ_URI: Joi.string().required()
    })
  })],
  providers: [RabbitMQConfigService, ConfigService],
  exports: [RabbitMQConfigService, ConfigService]
})
export class RabbitMQConfigModule{}