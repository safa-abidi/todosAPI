import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './model/todo.model';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { TodoService } from './todo-service/todo-service.service';
@Controller('todo')
export class TodoController {
  constructor(public todoService: TodoService) {}

  //endpoints
  //get all todos
  @Get()
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  //add one todo
  @Post()
  addTodo(@Body() newTodo: AddTodoDto): Todo {
    return this.todoService.addTodo(newTodo);
  }

  //get one todo by id
  @Get('/:id')
  getTodoById(@Param('id') id): Todo {
    return this.todoService.getTodoById(id);
  }

  //delete todo by id
  @Delete('/:id')
  deleteTodo(@Param('id') id): string {
    return this.todoService.deleteTodo(id);
  }

  //update todo by id
  @Put('/:id')
  updateTodo(@Param('id') id, @Body() newTodo): UpdateTodoDto {
    return this.todoService.updateTodo(id, newTodo);
  }
}
