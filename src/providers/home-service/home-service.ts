import { HttpBaseProvider } from './../http-base/http-base';
import { Injectable } from '@angular/core';
import { Path, GET, Observe, QueryParams } from './../../rest/index';


@Injectable()
export class HomeService   {

  constructor(private httpBaseProvider:HttpBaseProvider) {
    // super();
  }

  @GET
  @Path('public/banner/getBannerList')
  getBannerList(): any {
    return this.httpBaseProvider.get();
  }

  // @GET
  // @Path('public/goods/get')
  getHomeGoodsList(): any {
    return this.httpBaseProvider.get({goodsId:94});
  }


}
