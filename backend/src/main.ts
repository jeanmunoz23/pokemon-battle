import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,POST',
    credentials: true,
  };

  app.enableCors(corsOptions);
  app.setGlobalPrefix('api');
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';

  console.log('Database URL:', process.env.DATABASE_URL);

  await app.listen(port, host, () => {
    console.log(`Server is listening ${host}:${port}/api`);
  });
}
bootstrap();
