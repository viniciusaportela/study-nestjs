import { JwtDecoded } from './jwt-decoded';

declare global {
  namespace Express {
    interface Request {
      user?: JwtDecoded;
    }
  }
}
