import { IsEnum, IsNotEmpty, MinLength, MaxLength, IsString, IsOptional } from 'class-validator';
import { TodoStatusEnum } from 'src/todo/enums/todo-status.enum';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  name: string;

  @IsEnum(TodoStatusEnum)
  @IsOptional()
  status: TodoStatusEnum;
}
