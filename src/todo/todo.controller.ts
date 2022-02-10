import { Controller, Get } from '@nestjs/common';
import { Todo } from './model/todo.model';

@Controller('todo')
export class TodoController {
  constructor() {
    this.todos = [new Todo(1, 'sport', 'faire du sport')];
  }
  todos: Todo[] = [];

  @Get()
  getTodos(): Todo[] {
    return this.todos;
  }
}
