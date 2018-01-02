import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { BooksService } from '../services/books.service';
import { book } from './book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  //books: book[] = [];
  books = [];
  constructor(private http: HttpClient, private bookService: BooksService) { }

  ngOnInit() {
    this.GetBooks();
  }

  GetBooks(){
    this.bookService.getBooks().subscribe(data => {
      this.books = data as book[];
    });
  }
}
