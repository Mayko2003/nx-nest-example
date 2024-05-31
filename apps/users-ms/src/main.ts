/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envConfig } from '@lib/common';

async function bootstrap() {
  // show NODE_ENV
  Logger.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  const port = envConfig.PORT;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: port,
      },
    }
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  await app.listen();
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
