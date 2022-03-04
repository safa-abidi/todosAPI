import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('in the first interceptor');
    const dateIn = Date.now();
    console.log('request created at : ', dateIn);
    return next.handle().pipe(
      tap(() => {
        const dateOut = Date.now();
        console.log('request ended at : ', dateOut);
        console.log(`request duration : ${dateOut - dateIn} ms`);
      }),
    );
  }
}
