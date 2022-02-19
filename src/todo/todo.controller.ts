import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Todo } from './model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { Request } from 'express';

@Controller('todo')
export class TodoController {
  constructor() {
    this.todos = [new Todo('1', 'sport', 'faire du sport')];
  }
  todos: Todo[] = [];

  @Get()
  getTodos(@Req() request: Request): Todo[] {
    console.log(request);
    return this.todos;
  }

  @Post()
  addTodo(@Body() newTodo: Todo): Todo {
    let todo = new Todo();
    todo.id = uuidv4();
    todo = { ...todo, ...newTodo };
    this.todos.push(todo);
    return todo;
  }
}
