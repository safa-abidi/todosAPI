import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from '../dto/add-todo.dto';
import { Todo } from '../model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(newTodo: AddTodoDto): Todo {
    let todo = new Todo();
    todo.id = uuidv4();
    todo = { ...todo, ...newTodo };
    this.todos.push(todo);
    return todo;
  }

  getTodoById(id: string): Todo {
    const todo = this.todos.find((foundTodo) => foundTodo.id === id);
    if (todo) return todo;
    throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
  }

  deleteTodo(id: string): string {
    const index = this.todos.findIndex((todo) => {
      console.log(typeof todo.id);
      console.log(typeof id);

      return todo.id === id;
    });

    if (index > -1) {
      this.todos.splice(index, 1);
      return 'todo deleted';
    } else throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
  }

  updateTodo(id: string, newTodo: UpdateTodoDto): Todo {
    const todo = this.getTodoById(id);
    todo.description = newTodo.description ?? todo.description;
    todo.name = newTodo.name ?? todo.name;
    todo.status = newTodo.status ?? todo.status;
    return todo;
  }
}
