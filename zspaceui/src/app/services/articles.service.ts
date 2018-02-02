import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { Article } from '../entities/article';

@Injectable()
export class ArticlesService {
  apiBaseUrl;
  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.apiBaseUrl = this.appConfigService.getHttpApiBase();
  }

  getAllArticles() {
    return this.http.get(this.apiBaseUrl + '/article');
  }

  getArticleById(id) {
    return this.http.get(this.apiBaseUrl + '/article/' + id);
  }

  getArticlesByUser() {

  }

  addArticle(article: Article) {
    const body = {
      'article': article
    };
    return this.http.post(this.apiBaseUrl + '/article', body);
  }

  updateArticle() { }

  deleteArticle() { }
}
