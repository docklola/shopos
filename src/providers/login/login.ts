import { HttpClient } from '@angular/common/http';
import { HttpBaseProvider } from './../http-base/http-base';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider extends HttpBaseProvider {

  constructor(public http: HttpClient) {
    super(http);
  }

  login(userInfo) {
    return super.post('member/login',userInfo,{ headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
  }

}
