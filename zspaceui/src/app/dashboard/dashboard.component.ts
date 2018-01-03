import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { book } from '../book/book';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private bookService: BooksService) { }
  books = [];

  ngOnInit() {
    this.GetBooks();
  }

  GetBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data as book[];
    });
  }
}
