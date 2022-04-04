import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export const errors = {
  tailleMin: 'la taille est moins que le minimum',
  tailleMax: 'la taille est plus que le maximum',
  notEmpty: 'le champ  ne doit pas etre vide',
};
export class AddTodoDto {
  @IsNotEmpty({ message: errors.notEmpty })
  @MinLength(3, { message: errors.tailleMin })
  @MaxLength(10, { message: errors.tailleMax })
  name: string;

  @IsNotEmpty({ message: errors.notEmpty })
  @MinLength(10, { message: errors.tailleMin })
  description: string;
}
