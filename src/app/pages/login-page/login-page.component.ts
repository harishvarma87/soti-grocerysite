import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
 

  loginResponse = ''
  loginClass = ''

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void { }

  onSubmitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
      
        this.loginResponse = "login successfully, thank you"
        this.loginClass = 'alert-success'
        localStorage.setItem('token', response.token)
        localStorage.setItem('user',JSON.stringify(response.user))
        this.router.navigateByUrl('home')
      },
      (error) => {
      
        this.loginResponse = "login failed, try again"
        this.loginClass = 'alert-danger'
      }
    );
  }
}
