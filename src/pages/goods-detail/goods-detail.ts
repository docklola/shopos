import { Goods } from './../../model/goods';
import { GoodsDetailProvider } from './../../providers/goods-detail/goods-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goods-detail.html',
})
export class GoodsDetailPage {

  currentPics;
  goods: Goods;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private goodsDetailService: GoodsDetailProvider) {
  }

  ionViewDidLoad() {
    let goodsId = this.navParams.get('goodsId');
    this.goodsDetailService.getGoodsDetail({ goodsId: goodsId }).subscribe(data => {
      console.log(data);
      this.goods = data['data']['goods'];
      this.currentPics = this.goods.images.split('&&');
    });
  }

}
