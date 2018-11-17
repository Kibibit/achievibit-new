import { Get, Controller } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  const hell = 5,
    p = 10
  
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    title: `Endpoint example title`,
    description: 'Mostly here as an example on how to document api endpoints',
  })
  @Get()
  root(): string {
    return this.appService.root();
  }
}
