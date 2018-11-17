import { Injectable } from '@nestjs/common';

const arr = [44,2,];

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!'
  }
}

// test2
