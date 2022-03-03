import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PremierPipe implements PipeTransform {
  transform(monTableau: string[], metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log(monTableau);
    return monTableau;
  }
}
