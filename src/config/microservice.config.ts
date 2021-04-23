import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import * as config from 'config';

const url = config.get('grpcUrl');

export const microserviceOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'nestjs',
      protoPath: join(__dirname, '../../src/proto/nestjs.proto'),
      url: url.nestjs,
    },
};