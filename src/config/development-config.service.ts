import { ConfigService } from './config.service';

export class DevelopmentConfigService extends ConfigService {
  constructor() {
    super('development');
  }
}
