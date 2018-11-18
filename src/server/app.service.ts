import { Injectable } from '@nestjs/common';

const pizz = [2,3,]

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}
