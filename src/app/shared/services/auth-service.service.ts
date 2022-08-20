import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

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
  // private BASE_URL = environment.BASE_URL;
  private BASE_URL= "https://lightup-autocare.herokuapp.com";
  private LOGIN_URL = this.BASE_URL+ this.endpoint.staff+"/login";
  private SIGN_UP = this.BASE_URL + this.endpoint.staff+"/signup";

  constructor(private http: HttpClient) { }

  // user login
  userLogin(user: any) {
    return this.http.post(this.LOGIN_URL, user)
  }

  //logging out
  logOut() {
    localStorage.clear();
  }

  IsLoggedIn() {
    return localStorage.getItem('token')!=null;
  }

  // consuming each endpoints

  // clients
  GetAllClient() {
    return this.http.get(`${this.BASE_URL + this.endpoint.client}`);
  }
  AddClient(cred: any) {
    return this.http.post(`${this.BASE_URL + this.endpoint.client}`, cred);
  }
  DeleteClient(index:any) {
    console.log(index)
    return this.http.delete(`${this.BASE_URL +this.endpoint.client+ "/"+index }`);
  }
  GetClient(id: any) {
    return this.http.get(`${this.BASE_URL + this.endpoint.client+ "/"+ id}`);
  }

  // vehicles
  GetAllVehicle() {
    return this.http.get(`${this.BASE_URL + this.endpoint.vehicle}`);
  }
  AddVehicle(cred: any) {
    return this.http.post(`${this.BASE_URL + this.endpoint.vehicle}`, cred);
  }
  DeleteVehicle(index:number) {
    return this.http.delete(`${this.BASE_URL +this.endpoint.vehicle+ "/"+index }`)
  }
  GetVehicle(id: any) {
    return this.http.get(`${this.BASE_URL + this.endpoint.vehicle+ "/"+ id}`);
  }

  //invoices
  GetAllInvoice() {
    return this.http.get(`${this.BASE_URL + this.endpoint.invoice}`);
  }
  AddInvoice(cred:any){
    return this.http.post(`${this.BASE_URL + this.endpoint.invoice}`, cred);
  }
  DeleteInvoice(index:any) {
    return this.http.delete(`${this.BASE_URL +this.endpoint.invoice+ "/"+index }`)
  }
  GetInvoice(id: any) {
    return this.http.get(`${this.BASE_URL + this.endpoint.invoice+ "/"+ id}`);
  }

  // staffs
  GetAllStaffs() {
    return this.http.get(`${this.BASE_URL + this.endpoint.staff}`);
  }
  AddStaff(cred:any){
    return this.http.post(`${this.SIGN_UP}`, cred);
  }
  DeleteStaff(index:any) {
    return this.http.delete(`${this.BASE_URL +this.endpoint.staff+ "/"+index }`)
  }
  GetStaff(id: any) {
    return this.http.get(`${this.BASE_URL + this.endpoint.staff+ "/"+ id}`);
  }

  // services
  GetAllService() {
    return this.http.get(`${this.BASE_URL + this.endpoint.service}`);
  }
  AddService(cred:any){
    return this.http.post(`${this.BASE_URL + this.endpoint.service}`, cred);
  }
  DeleteService(index:any) {
    return this.http.delete(`${this.BASE_URL +this.endpoint.service+ "/"+index }`)
  }
  GetService(id: any) {
    return this.http.get(`${this.BASE_URL + this.endpoint.service+ "/"+ id}`);
  }

}
