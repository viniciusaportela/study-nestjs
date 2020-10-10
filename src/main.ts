import loaders from './loaders'

async function loadMicroservices(loaders: any[]) {
  await Promise.all(loaders.map(loader => loader()))
}

async function loadGateway(loader: () => Promise<void>) {
  await loader();
}

async function bootstrap() {
  const gateway = loaders.splice(loaders.length - 1, 1)[0];

  await loadMicroservices(loaders)
  await loadGateway(gateway)
}

bootstrap();
