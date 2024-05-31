import { Controller, Get, Inject } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('TEST-SVC') private readonly testSvcClient: ClientProxy) {}

  @Get()
  getData() {
    return 'Hello World!'
  }
}
