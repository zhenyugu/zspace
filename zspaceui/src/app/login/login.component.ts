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
  loginMessage;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginUser = new user();
    this.loginUser.name = '';
    this.loginUser.password = '';
  }

  onSubmit() {
    if (this.loginUser === undefined || this.loginUser.name === '' || this.loginUser.password === '') {
      this.loginMessage = '请输入账户名/密码';
      return;
    }
    this.loginService.login(this.loginUser.name, this.loginUser.password).subscribe(res => {
      res = JSON.parse(res);
      if (res.code === 200) {
        localStorage.setItem('username', res.username);
        localStorage.setItem('userid', res.userid);
        this.router.navigate(['/dashboard']);
      } else {
        this.loginMessage = '账户名/密码不正确';
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

}
