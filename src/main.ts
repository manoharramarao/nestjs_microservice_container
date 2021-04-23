import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import { microserviceOptions } from './config/microservice.config';

async function bootstrap() {
  const logger: Logger = new Logger('bootstrap');
  const grpcUrl = config.get('grpcUrl');
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  await app.listen(()=>{
    logger.log(`NestJS Microservice is listening on ${grpcUrl.nestjs}`);
  });
}
bootstrap();
