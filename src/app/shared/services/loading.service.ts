import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements HttpInterceptor {

  constructor(public loaderService: SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.isPreloading.next(true);

    return next.handle(req).pipe(
      finalize(
        () => {
          this.loaderService.isPreloading.next(false);
        }
      )
    )
  }
}
