import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MongoConfigModule } from "./config/mongo/config.module";
import { MongoConfigService } from "./config/mongo/config.service";

import { UserModule } from "./user.module";

@Module({
  imports: [
    MongoConfigModule,
    MongooseModule.forRootAsync({
      imports: [MongoConfigModule],
      useFactory: async (config: MongoConfigService) => ({
        uri: config.uri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [MongoConfigService]
    }),
    UserModule, 
  ],
})
export class AppModule {}