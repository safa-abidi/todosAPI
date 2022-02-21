import { PartialType } from '@nestjs/mapped-types';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { AddTodoDto } from './add-todo.dto';
export class UpdateTodoDto extends PartialType(AddTodoDto) {
  status: TodoStatusEnum = TodoStatusEnum.waiting;
}
