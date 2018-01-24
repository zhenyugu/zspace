import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book/book';
import { BookHistory } from './book-history';
import { BooksService } from '../services/books.service';
import { BookHistoryService } from '../services/book-history.service';
import { HelpService } from '../services/help.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  books = [];
  bookHistory = [];
  addBookMessage;

  newBook: Book;
  newBookHistory: BookHistory;

  constructor(private bookService: BooksService, private router: Router,
    private bookHistoryService: BookHistoryService,
    private helpService: HelpService) { }

  ngOnInit() {
    this.newBook = new Book();
    this.getBookHistroy();
  }

  getBookHistroy() {
    const userid = this.helpService.getCurrentUser().userid;
    this.bookHistoryService.getBookHistoryByUser(userid).subscribe(data => {
      console.log(data);
      this.bookHistory = data;
    });
  }

  addNewBook() {
    const book = this.newBook as Book;
    if (book.name === undefined || book.author === undefined) {
      this.addBookMessage = '请填入正确的书名和作者';
      return;
    }

    const user = this.helpService.getCurrentUser();

    if (user.userid === undefined || user.username === null) {
      this.router.navigate(['login']);
      return;
    }
    // check if book existed
    this.bookService.getBookByNameAndAuthor(book.name, book.author).subscribe(result => {
      console.log(book);
      if (result.length === 1) {
        const bookHistory = new BookHistory();
        bookHistory.bookId = result[0].bookId;
        bookHistory.readerId = Number(user.userid);
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
              bookHistory.readerId = Number(user.userid);
              bookHistory.status = 0;
              bookHistory.hasArticle = false;
              this.bookHistoryService.addBookHistory(bookHistory).subscribe(r => {
                this.getBookHistroy();
              });
            });
          }
        });
      }
      this.newBook = new Book();
    });

    this.clearAddBookMessage();
  }

  deleteBook(id) {
    this.bookHistoryService.deleteBookHistory(id).subscribe(data => {
      this.getBookHistroy();
    });
  }

  addBookArticle(id) {
    this.router.navigate(['home/bookArticle', id]);
  }

  clearAddBookMessage() {
    this.addBookMessage = '';
  }
}
