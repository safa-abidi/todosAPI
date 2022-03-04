import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class PremierMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('le premier middleware');
    next();
  }
}