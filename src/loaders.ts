import { userLoader } from './microservices/modules/user/user.loader';
import { gatewayLoader } from './gateway/gateway.loader';

export default [
  userLoader,
  gatewayLoader
]