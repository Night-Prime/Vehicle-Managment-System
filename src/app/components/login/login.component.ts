import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgToastService } from 'ng-angular-popup';
import { FbAuthService } from 'src/app/shared/services/fb-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private service:AuthServiceService,
    private router:Router,
    private toast: NgToastService,
    public social:FbAuthService
     ) {
   this.service.logOut();
   }

  responseData:any;
  email = '';
  password= '';

  // Built a Reactive Form for Login
  Login = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  login() {
    // console.log(this.Login.value, 'Submitted!')
    if(this.Login.valid){
      this.service.userLogin(this.Login.value).subscribe(results =>{
        if(results != null){
          this.responseData = results;
          this.toast.success({detail: 'Sucess!',summary: 'You are logged in sucessfully!',duration:5000});
          // localStorage.setItem('token', this.responseData.payload.token);
          // localStorage.setItem('email', this.responseData.payload.email);
          // localStorage.setItem('password', this.responseData.payload.password);
          this.router.navigate(['/admin'])
        }
      }, (error) => {
        console.log(`Error was found at login, message: ${error}`);
        this.toast.error({detail: 'Invalid credentials', summary: 'The token is Invalid!', duration:5000});
      })
    }
  }

  // Guest Mode function
  guestLogin = new FormGroup({
    email: new FormControl("superadmin@gmail.com", Validators.required),
    password: new FormControl("password", Validators.required)
  })

  guest(){
    console.log(this.guestLogin.value)
      this.service.userLogin(this.guestLogin.value).subscribe(results =>{
        if(results != null){
          this.responseData = results;
          this.toast.success({detail: 'Sucess!',summary: 'You are logged in sucessfully!',duration:5000});
          localStorage.setItem('token', this.responseData.payload.token);
          localStorage.setItem('email', this.responseData.payload.email);
          localStorage.setItem('password', this.responseData.payload.password);
          this.router.navigate(['/admin'])
        }
      }, (error) => {
        console.log('Error was found at login');
        this.toast.error({detail: 'Invalid credentials', summary: 'The token is Invalid!', duration:5000});
      })
  }

  onSignIn(googleUser : any) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }




  ngOnInit(): void {
  }

}
