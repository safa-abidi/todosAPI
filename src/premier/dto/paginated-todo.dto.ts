import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetPaginatedTodoDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number) //transforming its type
  page: number;

  @IsNumber()
  @IsOptional()
  item: number;
}
