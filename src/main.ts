import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function start() {
  const PORT = process.env.PORT_SERVER || 5000;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();

