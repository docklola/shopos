import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_BASE_URL } from './../api-url/api-url';

@Injectable()
export class HttpBaseProvider {

  constructor(public http: HttpClient,) {
  }

  get(url: string, option?: any) {
    url = APP_BASE_URL + url;
    return this.http.get(url, option);
  }

  post(url: string, body?: any) {
    url = APP_BASE_URL + url;
    return this.post(url, body);
  }

}