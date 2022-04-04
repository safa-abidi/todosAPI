import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { concat } from 'rxjs';

@Injectable()
export class PremierPipe implements PipeTransform {
  transform(monTableau: string[], metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log(monTableau);
    if (monTableau.length) {
      monTableau.forEach((element) => {
        element = element.toUpperCase();
        const resultat = concat(element, '-');
        return resultat;
      });
    } else throw new BadRequestException('smth went wrong');
  }
}
