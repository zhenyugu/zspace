import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: user;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginUser = new user();
  }

  onSubmit() {
     console.log('login successfully');
    // localStorage.setItem('currentUser', 'zgu');

    this.loginService.login('tj', 'password').subscribe(res => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
  }

  register() {
    this.router.navigate(['register']);
  }

}
