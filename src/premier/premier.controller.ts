import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { isInstance } from 'class-validator';
import { Observable } from 'rxjs';
import { DurationInterceptor } from 'src/interceptors/duration.interceptor';
import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/user_update.dto';
import { PremierPipe } from './pipe/premier.pipe';

@UseInterceptors(DurationInterceptor)
@Controller('premier')
export class PremierController {
  @Get('/:name/:firstname/:op?') //op is optional
  @HttpCode(499)
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
  @Get('/:name/:firstname')
  getPremierWithParam(@Param('name') params): string {
    console.log(params);
    console.log('GET 🐢');
    throw new NotFoundException('');
    return 'GET 🐢';
  }

  @Post('test')
  testValidateur(@Body() user: UserDto): UserDto {
    console.log(user);
    console.log(isInstance(user, UserDto));
    return user;
  }

  @Post('testUpdate')
  testVlidateurUpdate(@Body() user: UserUpdateDto): UserUpdateDto {
    console.log(user);
    console.log(isInstance(user, UserDto));
    return user;
  }

  @Post('/skills')
  @UsePipes(new PremierPipe())
  formatArray(@Body() skills: string[]) {
    return skills;
  }
}
