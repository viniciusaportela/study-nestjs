import { ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { json } from "body-parser";
import * as cors from 'cors';

import config from "../config";
import { HttpExceptionFilter } from "../gateway/filters/http-exception.filter";
import { GraphQlExceptionFilter } from "./filters/grapql-exception.filter";
import { RpcExceptionFilter } from "./filters/rpc-exception.filter";
import { GatewayModule } from "./gateway.module";

export async function gatewayLoader() {
  const gateway = await NestFactory.create(GatewayModule);

  const { httpAdapter } = gateway.get(HttpAdapterHost);

  gateway.useGlobalPipes(new ValidationPipe());
  gateway.useGlobalFilters(new RpcExceptionFilter(httpAdapter), new HttpExceptionFilter(), new GraphQlExceptionFilter());

  gateway.use(json());
  gateway.use(cors());

  await gateway.listen(config.gatewayPort);

  console.log('[gateway] OK');
}