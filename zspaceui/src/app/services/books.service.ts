import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks = function () {
    return this.http.get('http://localhost:3000/books');
  };

  addBook = function () { }

  updateBook = function () { }

  deleteBook = function () { }

}
