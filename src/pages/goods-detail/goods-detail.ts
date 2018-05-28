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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private goodsDetailService: GoodsDetailProvider) {
  }

  ionViewDidLoad() {
    let goodsId = this.navParams.get('goodsId');
    this.goodsDetailService.getGoodsDetail({ goodsId: goodsId }).subscribe(data => {
      console.log(data);
    });
  }

}
