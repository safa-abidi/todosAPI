import { IsEnum, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { TodoStatusEnum } from 'src/todo/enums/todo-status.enum';

export class UserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  name: string;

  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
