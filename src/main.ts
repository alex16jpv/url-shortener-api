import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: false,
  });
  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    if (process.env.STAGE === 'local') {
      console.log('Application is running on: http://localhost:3000');
    } else {
      console.log('Application is running');
    }
  });
}
bootstrap();
