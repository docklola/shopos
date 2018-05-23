import { HttpBaseProvider } from './../http-base/http-base';
import { Injectable } from '@angular/core';
import { Path, GET, Observe } from './../../rest/index';


@Injectable()
export class HomeService extends HttpBaseProvider {

  constructor() {
    super();
  }

  @GET
  @Path('public/banner/getBannerList')
  getBannerList(): any {
    return super.get();
  }

  @GET
  @Path('public/goods/indexGoods')
  getHomeGoodsList(): any {
    return super.get();
  }


}
