import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  apiBase = 'http://localhost:3000';

  constructor() { }

  getHttpApiBase = function () {
    return this.apiBase;
  };


}
