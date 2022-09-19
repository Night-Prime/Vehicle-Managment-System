import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  // function to make POST request to the server
  reqPayments(stripeToken: any):Observable<any> {
    const url = "https://light-auto-care-server.herokuapp.com/checkout/";

    return this.http.post<any> (url, {token: stripeToken});
  }
}
