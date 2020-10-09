import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

import { DevelopmentConfigService } from './development-config.service';
import { ProductionConfigService } from './production-config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useClass: process.env.NODE_ENV !== 'production'
        ? DevelopmentConfigService
        : ProductionConfigService,
    },
  ],
  exports: [ConfigService]
})
export class ConfigModule {}
