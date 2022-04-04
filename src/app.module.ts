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

import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { PublicationModule } from './publication/publication.module';
import { PubDbModule } from './pub-db/pub-db.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PremierModule,
    TodoModule,
    PublicationModule,
    PubDbModule,
    MongooseModule.forRoot(
      'mongodb+srv://safa:rEkalFEz1ozcz9at@cluster0.rhacs.mongodb.net/pub?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PremierMiddleware)
      .forRoutes(
        'todo*',
        {
          path: 'premier',
          method: RequestMethod.GET,
        },
        {
          path: 'randomPath*', // * means anything than comes after /randomPath/
          method: RequestMethod.DELETE,
        },
      )
      .apply(logger)
      .forRoutes('')
      .apply(HelmetMiddleware)
      .forRoutes('');
  }
}
