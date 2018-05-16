import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpBaseProvider {

  constructor(public http: HttpClient) {
  }

  get(url: string, options?) {
    return this.http.get(url,options);
  }

  post(url:string,options?) {
    return this.http.post(url,options);
  }

}
