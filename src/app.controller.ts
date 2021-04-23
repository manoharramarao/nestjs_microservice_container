import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ResDto } from './dto/res.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('nestjsService', 'callGrpc')
  async callGrpc(): Promise<ResDto>{
    let resDto = new ResDto();
    resDto.res = "Response from microservice";
    return resDto;
  }
}
