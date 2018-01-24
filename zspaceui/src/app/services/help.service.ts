import { Injectable } from '@angular/core';

@Injectable()
export class HelpService {

  constructor() { }

  getCurrentUser() {
    const user = {
      'username': localStorage.getItem('username'),
      'userid': localStorage.getItem('userid')
    };
    return user;
  }
}
