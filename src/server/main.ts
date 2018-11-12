import { KibibitLoggerService } from './services/kibibit-logger.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(KibibitLoggerService));

  await app.listen(3000);
}

bootstrap();
