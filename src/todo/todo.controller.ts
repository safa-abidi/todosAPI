import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
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

  @Get('/:id')
  getTodoById(@Param('id') id): Todo {
    console.log(id);
    const todo = this.todos.find((actualTodo) => actualTodo.id === id);
    if (todo) return todo;
    throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id): string {
    console.log(id);
    //find the todo by its id
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index) {
      this.todos.splice(index, 1);
      return 'todo deleted';
    } else throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
  }

  @Put('/:id')
  updateTodo(@Param('id') id, @Body() newTodo): any {
    console.log(id, newTodo);
    const todo = this.getTodoById(id);
    todo.description = newTodo.description
      ? newTodo.description
      : todo.description;

    todo.name = newTodo.name ? newTodo.name : todo.name;
    return todo;
  }
}
