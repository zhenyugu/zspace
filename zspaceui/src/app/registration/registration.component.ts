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

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit() {
    console.log(this.user);
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

}
