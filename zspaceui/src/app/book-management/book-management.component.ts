import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BookHistory } from './book-history';
import { BooksService } from '../services/books.service';
import { BookHistoryService } from '../services/book-history.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  books = [];
  bookHistory = [];

  newBook: Book;
  newBookHistory: BookHistory;

  constructor(private bookService: BooksService, private bookHistoryService: BookHistoryService) { }

  ngOnInit() {
    this.newBook = new Book();
    this.getBookHistroy();
  }

  getBookHistroy() {
    this.bookHistoryService.getBookHistoryByUser(1).subscribe(data => {
      console.log(data);
      this.bookHistory = data;
    });
  }

  addNewBook() {
    const book = this.newBook as Book;
    // check if book existed
    this.bookService.getBookByNameAndAuthor(book.name, book.author).subscribe(result => {
      console.log(book);
      if (result.length === 1) {
        const bookHistory = new BookHistory();
        bookHistory.bookId = result.id;
        bookHistory.readerId = 1;
        bookHistory.status = 0;
        bookHistory.hasArticle = false;
        this.bookHistoryService.addBookHistory(bookHistory).subscribe(data => {
          this.getBookHistroy();
        });
      } else {
        this.bookService.addBook(book).subscribe(data => {
          if (data) {
            this.bookService.getBookByNameAndAuthor(book.name, book.author).subscribe(d => {
              const bookHistory = new BookHistory();
              bookHistory.bookId = d[0].bookId;
              bookHistory.readerId = 1;
              bookHistory.status = 0;
              bookHistory.hasArticle = false;
              this.bookHistoryService.addBookHistory(bookHistory).subscribe(r => {
                this.getBookHistroy();
              });
            });
          }
        });
      }
    });
  }

  deleteBook(id) {
    this.bookService.deleteBook(id).subscribe(result => {
      this.getBookHistroy();
    });
  }

}
