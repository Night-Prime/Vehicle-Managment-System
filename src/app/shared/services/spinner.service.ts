import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public  isPreloading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }
}
