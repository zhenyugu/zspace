import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { BookHistory } from '../book-management/book-history';

@Injectable()
export class BookHistoryService {

  apiBaseUrl;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.apiBaseUrl = appConfigService.getHttpApiBase();
  }

  addBookHistory = function (newBookHistory: BookHistory) {
    const body = {
      'bookId': newBookHistory.bookId,
      'readerId': newBookHistory.readerId,
      'status': newBookHistory.status,
      'hasArticle': newBookHistory.hasArticle,
      'createdTime': newBookHistory.createdTime
    };
    return this.http.post(this.apiBaseUrl + '/bookHistory', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')

    });
  };

  getAllHistory = function () {
    return this.http.get(this.apiBaseUrl + '/bookHistory');
  };

  getBookHistoryByUser = function (userId) {
    return this.http.get(this.apiBaseUrl + '/bookHistory/' + userId);
  };

  updateBookHistory = function () { };

  deleteBookHistory = function () { };

}
