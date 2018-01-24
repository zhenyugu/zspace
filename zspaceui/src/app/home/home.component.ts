import { Component, OnInit } from '@angular/core';
import { HelpService } from '../services/help.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hasLogin: boolean;

  constructor(private router: Router, private helpService: HelpService) {
    this.hasLogin = false;
  }
  ngOnInit() {
    this.checkUserSession();
  }

  checkUserSession() {
    const user = this.helpService.getCurrentUser();
    if (user !== undefined) {
      this.hasLogin = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

}
