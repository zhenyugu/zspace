import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../book/book';
import { AppConfigService } from './app-config.service';


@Injectable()
export class BooksService {

  apiBaseUrl;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.apiBaseUrl = appConfigService.getHttpApiBase();
  }

  getBooks = function () {
    return this.http.get(this.apiBaseUrl + '/books', {
    });
  };

  getBookByNameAndAuthor = function (name, author) {
    return this.http.get(this.apiBaseUrl + '/books?name=' + name + '&author=' + author);
  };

  addBook = function (book) {
    const body = {
      name: book.name,
      author: book.author
    };
    return this.http.post('http://localhost:3000/books', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }

  updateBook = function () { }

  deleteBook = function (id: number) {
    return this.http.delete('http://localhost:3000/books/' + id);
  }
}
