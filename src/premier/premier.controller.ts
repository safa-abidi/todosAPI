import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('premier')
export class PremierController {
  @Get('/:name/:firstname')
  getPremierWithParams(@Param('name') params): string {
    console.log(params);
    console.log('Get');
    return 'Get 👽';
  }

  @Get()
  getPremier(): Observable<number> {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe(
      (val) => {
        console.log("j'ai reçu la valeur " + val);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('end of process');
      },
    );
    return observable; //shows 1 in the brower : last value of i before it hits 0 (0 complete)
  }

  @Post()
  postPremier(): string {
    return 'Post 🐃';
  }

  @Put()
  putPremier(): string {
    return 'Put 🍉';
  }

  @Delete()
  deletePremier(): string {
    return 'Delete 🌊';
  }
}
