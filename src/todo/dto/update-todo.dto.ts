import { PartialType } from '@nestjs/mapped-types';
import { IsEnum } from 'class-validator';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { AddTodoDto } from './add-todo.dto';
export class UpdateTodoDto extends PartialType(AddTodoDto) {
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum = TodoStatusEnum.waiting;
}
