import { userLoader } from './microservices/user/user.loader';
import { gatewayLoader } from './gateway/gateway.loader';

export default [
  userLoader,
  gatewayLoader
]