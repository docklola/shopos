import { HttpBaseProvider } from './../http-base/http-base';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Path, GET } from './../../rest/index';
/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeService extends HttpBaseProvider {

  constructor(public http: HttpClient) {
    super(http);
  }

  @GET
  @Path('/public/banner/getBannerList')
  getBannerList(): any {
    return super.get();
  }

  // getHomeGoodsList() {
  //   return super.get('http://shopos.wuliangit.com/api/v1/public/goods/indexGoods');
  // }


}
