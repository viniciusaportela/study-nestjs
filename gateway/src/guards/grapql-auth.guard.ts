import * as jwt from 'jsonwebtoken';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import config from '../config';

@Injectable()
export class GraphQlAuthGuard implements CanActivate {
  canActivate(executionContext: ExecutionContext) {
    const ctx = GqlExecutionContext.create(executionContext);
    const context = ctx.getContext();

    const authorizationToken = context.req.headers.authorization;

    return new Promise<boolean>((resolve) => {
      jwt.verify(authorizationToken, config.secret, (err: any) => {
        if (err) resolve(false);
        resolve(true);
      })
    }) 
  }
}
