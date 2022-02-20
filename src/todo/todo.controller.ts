import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Todo } from './model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { Request } from 'express';
import { TodoStatusEnum } from './enums/todo-status.enum';

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

  @Get('/:id')
  getTodo(@Param('id') id): Todo {
    console.log(id);
    const todo = this.todos.find((actualTodo) => actualTodo.id === id);
    if (todo) return todo;
    throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id): string {
    console.log(id);
    const todo = this.todos.find((actualTodo) => actualTodo.id === id);
    todo.status = TodoStatusEnum.waiting;
    return 'deleted';
  }
}
