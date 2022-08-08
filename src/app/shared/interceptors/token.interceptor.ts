import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = `${localStorage.getItem('token')}`
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzdXBlcmFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsIm5hbWUiOiJTdXBlciBBZG1pbiIsImlhdCI6MTY1OTUzNzQ1MiwiZXhwIjoxNjU5NjIzODUyfQ.f0YZHPyDbQPRFVaelnehnDsBdIZx4Yg9sc2rx8FJ1Oo';
    let jwttoken = request.clone({
      setHeaders: {
        Authorization: token
      }
    })
    return next.handle(jwttoken);
  }
}
