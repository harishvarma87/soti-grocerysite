import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  loginResponse = ''
  loginClass = ''
  userModel= new user();
  constructor(private auth: AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    this.auth.register(this.userModel).subscribe(
      (response)=>{
      this.loginResponse = "login successfully, thank you"
      this.loginClass = 'alert-success'
      localStorage.setItem('token', response.error)
      localStorage.setItem('user',JSON.stringify(response.message))
      this.router.navigateByUrl('login')

    },
    (error) => {
      this.loginResponse = "Account exists, Login"
      this.loginClass = 'alert-danger'
    })
  }
}
