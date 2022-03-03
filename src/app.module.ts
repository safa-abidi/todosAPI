import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './middleware/logger';
import { PremierMiddleware } from './middleware/premier.middleware';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PremierMiddleware, logger).forRoutes({
      path: 'premier',
      method: RequestMethod.GET,
    });
    throw new Error('Method not implemented.');
  }
}
