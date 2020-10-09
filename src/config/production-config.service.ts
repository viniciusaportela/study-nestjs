import { ConfigService } from './config.service';

export class ProductionConfigService extends ConfigService {
  constructor() {
    super('production');
  }
}
