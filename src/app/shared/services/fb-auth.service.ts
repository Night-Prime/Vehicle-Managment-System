import { GoogleAuthProvider } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { FacebookAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FbAuthService {

  constructor(
    private fb: AngularFireAuth,
    private router: Router,
    private service:AuthServiceService
  ) { }
  responseData:any;


  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin (provider: any){
    return this.fb
    .signInWithPopup(provider)
    .then((result) => {
      // console.log(result.additionalUserInfo?.profile);
      const message: any = result.additionalUserInfo?.profile;
      const { name, email, isSocial} = message;
      const token = {
              userDetails : { email, name,role: "admin"},
              isSocial : true
            }
      console.log(token);
      // sending the data to the backend
      this.service.userLogin(token).subscribe(result => {
        this.responseData = result;
        localStorage.setItem('token', this.responseData.payload.token);
        localStorage.setItem('email', this.responseData.payload.email);
        localStorage.setItem('password', this.responseData.payload.password);
        this.router.navigate(['/admin'])
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
