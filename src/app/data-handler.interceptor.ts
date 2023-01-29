import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { delay, mergeMap, Observable, of, retryWhen, tap } from 'rxjs';
import { Router } from '@angular/router';


export const maxRetries = 2;
export const delayMs = 2000;
@Injectable()
export class DataHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = { token: ""};
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${currentUser.token}`
        }
      });
    }

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status == 404) {
          this.router.navigate(['error']);
        }
        
      }
    }));
  }
}
