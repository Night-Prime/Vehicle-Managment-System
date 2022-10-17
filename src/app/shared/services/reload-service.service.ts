import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadServiceService {

  constructor() { }
  public isUserUpdated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
