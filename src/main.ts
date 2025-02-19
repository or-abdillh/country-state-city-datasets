import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cors
  app.enableCors({
    origin: [
      "https://hulu.dtz-internal-only.com",
      "https://app.hulutarget.com",
      "http://localhost"
    ]
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
