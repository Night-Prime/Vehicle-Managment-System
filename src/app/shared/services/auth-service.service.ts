import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  endpoint = {
    "client": "/clients",
    "invoice": "/invoices",
    "service": "/personalisedservices",
    "vehicle": "/vehicles",
    "staff": "/staffs"
  }

  // base url imported from environment folder
  private BASE_URL = environment.BASE_URL;
  private LOGIN_URL = this.BASE_URL+ this.endpoint.staff+"/login";

  constructor(private http: HttpClient) { }

  // user login
  userLogin(user: any) {
    return this.http.post(this.LOGIN_URL, user)
  }

  logOut() {
    localStorage.clear();
  }

  IsLoggedIn() {
    return localStorage.getItem('token')!=null;
  }
}
