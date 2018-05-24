import { HttpClient } from '@angular/common/http';
import { HttpBaseProvider } from './../http-base/http-base';
import { Injectable } from '@angular/core';


@Injectable()
export class HomeService extends HttpBaseProvider{

  constructor(public http: HttpClient)  {
    super(http);
  }


  getBannerList(): any {
    return super.get('public/banner/getBannerList');
  }

  getHomeGoodsList(): any {
    return super.get('public/goods/indexGoods');
  }

}
