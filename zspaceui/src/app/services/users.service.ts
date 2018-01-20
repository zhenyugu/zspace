import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../book/book';
import { AppConfigService } from './app-config.service';

import { User } from '../entities/user';

@Injectable()
export class UsersService {

  apiBaseUrl;
  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.apiBaseUrl = appConfigService.getHttpApiBase();
  }

  register(user: User) {
    const body = {
      'username': user.username,
      'password': user.password,
      'email': user.email,
      'phonenumber': user.phonenumber,
    };
    return this.http.post(this.apiBaseUrl + '/users/register', body);
  }

}
