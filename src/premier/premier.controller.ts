import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  getPremier(): string {
    return 'Get';
  }

  @Post()
  postPremier(): string {
    return 'Post';
  }

  @Put()
  putPremier(): string {
    return 'Put';
  }

  @Delete()
  deletePremier(): string {
    return 'Delete';
  }
}
