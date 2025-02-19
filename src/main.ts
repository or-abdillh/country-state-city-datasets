import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      "https://hulu.dtz-internal-only.com",
      "https://app.hulutarget.com",
      "http://localhost:8000",
      "http://localhost:5173"
    ]
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
