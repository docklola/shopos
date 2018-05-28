import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_BASE_URL } from './../api-url/api-url';

@Injectable()
export class HttpBaseProvider {

  constructor(public http: HttpClient) {
  }

  get(url: string, option?: any): any {
    url = APP_BASE_URL + url;
    return this.http.get(url, { params: option });
  }

  post(url: string, body?, options?: any): any {
    let pa = new HttpParams({ fromObject: body });
    url = APP_BASE_URL + url;
    return this.http.post(url, pa, options);
  }

}