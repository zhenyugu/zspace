import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from './app-config.service';



@Injectable()
export class LoginService {
  apiBaseUrl;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.apiBaseUrl = appConfigService.getHttpApiBase();
  }

  login = function (name, pass) {
    const body = {
      'username': name,
      'password': pass
    };
    return this.http.post(this.apiBaseUrl + '/login', body, { responseType: 'text' });
  };
}
