import { gatewayLoader } from './gateway/gateway.loader';
import loaders from './loaders'
import { userLoader } from './microservices/user/user.loader';

async function loadMicroservices(loaders: any[]) {
  await Promise.all(loaders.map(loader => loader()))
}

async function loadGateway(loader: () => Promise<void>) {
  await loader();
}

async function bootstrap() {
  const gateway: any = loaders.splice(loaders.length - 1, 1);

  console.log(loaders)
  console.log(gateway)

  //console.log('bootstrap')
  //await loadMicroservices(loaders)
  //await loadGateway(gateway)
  userLoader();
  gatewayLoader();
}

bootstrap();
