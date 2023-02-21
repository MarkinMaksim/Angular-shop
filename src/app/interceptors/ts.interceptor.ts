import { Injectable } from '@angular/core';
import { HttpHeaders, HttpEventType, HttpContextToken } from '@angular/common/http';
import type {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { type Observable, filter, map } from 'rxjs';
import { Stopwatch } from 'ts-stopwatch';

@Injectable()
export class TsInterceptor implements HttpInterceptor {
  private timing = 0 ;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`Request Interceptor:`);
    let timer = new Stopwatch();

    if (req.method === 'POST' || (req.method === 'PUT')) {
      console.log('req.method:', req.method);
      timer.start()
    };

    // response interceptor
    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpEvent<any>) => {
        // do stuff with response
        if ((event as HttpResponse<any>).url!.includes('cart') || (event as HttpResponse<any>).url!.includes('products')) {
          timer.stop
          console.log('Response Interceptor:');
          console.log(timer.getTime());
        }
        return event;
      })
    );
  }
}
