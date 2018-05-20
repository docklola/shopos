import { HttpBaseProvider } from './../http-base/http-base';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getBannerList() {
    return super.get('http://shopos.wuliangit.com/api/v1/public/banner/getBannerList');
  }

  getHomeGoodsList() {
    return super.get('http://shopos.wuliangit.com/api/v1/public/goods/indexGoods');
  }
  

}
