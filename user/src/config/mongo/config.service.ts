import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MongoConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('mongo.host')
  }

  get user(): string {
    return this.configService.get<string>('mongo.user')
  }

  get password(): string {
    return this.configService.get<string>('mongo.password')
  }
  
  get database(): string {
    return this.configService.get<string>('mongo.database')
  }

  get uri(): string {
    return this.configService.get<string>('mongo.uri')
  }
}