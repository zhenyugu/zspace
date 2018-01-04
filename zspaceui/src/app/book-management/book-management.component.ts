import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  books = [];

  constructor() { }

  ngOnInit() {
    this.getBookHistroy();
  }

  getBookHistroy() {
    this.books = [
      { 'name': 'test1', 'author': 'test1' },
      { 'name': 'test2', 'author': 'test2' },
      { 'name': 'test3', 'author': 'test3' },
    ];
  }

}
