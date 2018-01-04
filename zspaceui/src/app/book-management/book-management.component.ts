import { Component, OnInit } from '@angular/core';
import { book } from '../book/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  books = [];

  newBook: book;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.newBook = new book();
    this.getBookHistroy();
  }

  getBookHistroy() {

    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

    // this.books = [
    //   { 'name': 'test1', 'author': 'test1' },
    //   { 'name': 'test2', 'author': 'test2' },
    //   { 'name': 'test3', 'author': 'test3' },
    // ];
  }

  addNewBook() {
    console.log(111);
    this.bookService.addBook(this.newBook)
      .subscribe(result => {
        alert('success');
      });;
  }

}
