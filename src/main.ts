import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';

  console.log('Database URL:', process.env.DATABASE_URL);

  await app.listen(port, host, () => {
    console.log(`Server is listening ${host}:${port}`);
  });
}
bootstrap();
