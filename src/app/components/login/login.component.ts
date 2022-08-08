import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service:AuthServiceService, private router:Router) {
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
    console.log(this.Login.value, 'Submitted!')
    if(this.Login.valid){
      this.service.userLogin(this.Login.value).subscribe(results =>{
        if(results != null){
          this.responseData = results;
          localStorage.setItem('token', this.responseData.payload.token);
          localStorage.setItem('email', this.responseData.payload.email);
          localStorage.setItem('password', this.responseData.payload.password);
          this.router.navigate(['/admin'])
        }
      }, (error) => {
        console.log('Error was found at login')
      })
    }
  }



  ngOnInit(): void {
  }

}
