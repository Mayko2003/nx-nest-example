import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// DTO
import { GetUsersDto } from '@lib/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  @MessagePattern({ cmd: 'getUsers' })
  getData(@Payload() data: GetUsersDto) {
    console.log(data);
    return this.appService.getData();
  }
}
