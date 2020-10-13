import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
import * as Joi from '@hapi/joi';
import { join } from "path";

import { MongoConfigService } from "./config.service";
import configuration from "./configuration";

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: join(__dirname, '../../../.env.' + process.env.NODE_ENV),
    load: [configuration],
    expandVariables: true,
    validationSchema: Joi.object({
      MONGO_HOST: Joi.string().default('localhost'),
      MONGO_USER: Joi.string().default('root'),
      MONGO_PASSWORD: Joi.string().required(),
      MONGO_DATABASE: Joi.string().default('study-nestjs'),
      MONGO_URI: Joi.string().required()
    })
  })],
  providers: [MongoConfigService, ConfigService],
  exports: [MongoConfigService, ConfigService]
})
export class MongoConfigModule {}