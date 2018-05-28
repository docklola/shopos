import { HttpBaseProvider } from './../http-base/http-base';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GoodsDetailProvider extends HttpBaseProvider {

  constructor(public http: HttpClient) {
    super(http);
  }

  getGoodsDetail(goodsId): any {
    return super.get('public/goods/get', goodsId);
  }

}