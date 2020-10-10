import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { ForbiddenException, NestMiddleware } from '@nestjs/common';
import { JwtDecoded } from '../../@types/jwt-decoded';

export class TransformTokenMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = res.getHeaders().authorization;

    if (token) {
      jwt.verify(
        token as string,
        process.env.SECRET,
        (error: any, decoded: JwtDecoded) => {
          if (error) {
            throw new ForbiddenException();
          }

          req.user = decoded;

          next();
        },
      );
    } else {
      next();
    }
  }
}
