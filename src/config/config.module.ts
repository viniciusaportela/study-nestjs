import { Module } from '@nestjs/common';

import { DevelopmentConfigService } from './development-config.service';
import { ProductionConfigService } from './production-config.service';

@Module({
  providers: [
    {
      provide: ConfigModule,
      useClass: process.env.development
        ? DevelopmentConfigService
        : ProductionConfigService,
    },
  ],
})
export class ConfigModule {}
