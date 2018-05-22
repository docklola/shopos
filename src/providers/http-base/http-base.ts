import { Path, GET } from './../../rest/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Path('http://shopos.wuliangit.com/api/v1/')
@Injectable()
export class HttpBaseProvider {

  
  constructor(public http: HttpClient) {
  }

  @GET
  get() {
  }

  post(url: string, options?) {
    return this.http.post(url, options);
  }

}
