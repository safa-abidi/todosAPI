import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Request, Response } from 'express';
import { AppModule } from './app.module';

import * as morgan from 'morgan';
import { DurationInterceptor } from './interceptors/duration.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: ['http://localhost:4200'],
  };
  app.enableCors(corsOptions);
  app.use(morgan('dev'));
  //a middleware directly in main //le plus prioritaire puis la liste des middleware dans app.module
  app.use((req: Request, res: Response, next) => {
    console.log('middleware from app.use');
    next();
  });
  //global interceptor //new bcz out of DI context
  //app.useGlobalInterceptors(new DurationInterceptor());
  await app.listen(3000);
  app.useGlobalPipes(
    new ValidationPipe({
      //new bcz here we're out of the context of Dependency injection
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
}
bootstrap();
