import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entities/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  registrationMessage;

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
    this.user = new User();
    this.user.username = '';
    this.user.email = '';
    this.user.phonenumber = '';
    this.user.password = '';
  }

  onSubmit() {
    if (!this.isRegistrationInfoValid()) {
      this.registrationMessage = '请填入所有注册信息';
      return;
    }
    this.userService.register(this.user).subscribe(data => {
      this.gotoLogin();
    });
  }

  cancel() {
    this.gotoLogin();
  }

  gotoLogin() {
    this.router.navigate(['login']);
  }

  isRegistrationInfoValid() {
    if (this.user.username === '' || this.user.email === '' || this.user.phonenumber === '' || this.user.phonenumber === '') {
      return false;
    }

    return true;
  }

}
