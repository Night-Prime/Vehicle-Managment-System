import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthServiceService, private router:Router) {

  }

  canActivate():boolean {
    if(this.service.IsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
