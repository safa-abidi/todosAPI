import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './todo/todo-service/todo-service.service';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
