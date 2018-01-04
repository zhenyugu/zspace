import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { book } from '../book/book';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks = function () {
    return this.http.get('http://localhost:3000/books', {
    });
  };

  addBook = function (book) {
    const body = {
      name: book.name,
      author: book.author
    };

    //body = JSON.parse(body);

    return this.http.post('http://localhost:3000/books', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')

    });

  }

  updateBook = function () { }

  deleteBook = function () { }

}
