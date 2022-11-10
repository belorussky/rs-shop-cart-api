import { NestFactory } from '@nestjs/core';

import * as helmet from 'helmet';

import { AppModule } from './app.module';
console.log(process.env.PORT);
const port = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet.default());

  await app.listen(port);
}
bootstrap().then(() => {
  console.log('App is running on %s port', port);
});