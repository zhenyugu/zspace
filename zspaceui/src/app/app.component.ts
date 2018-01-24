import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  islogin = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(1);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
