import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
import * as Joi from '@hapi/joi';
import { join } from "path";

import configuration from "./configuration";
import { AppConfigService } from "./config.service";

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: join(__dirname, '../../../.env.' + process.env.NODE_ENV),
    load: [configuration],
    expandVariables: true,
    validationSchema: Joi.object({
      NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
      SECRET: Joi.string().required()
    })
  })],
  providers: [AppConfigService, ConfigService],
  exports: [AppConfigService, ConfigService]
})
export class AppConfigModule {}