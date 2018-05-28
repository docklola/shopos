import { Goods } from './../../model/goods';
import { GoodsDetailProvider } from './../../providers/goods-detail/goods-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goods-detail.html',
})
export class GoodsDetailPage {

  currentPics;
  goods: Goods = new Goods();
  loadingMod;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    private goodsDetailService: GoodsDetailProvider) {
      this.loadingMod = this.loading.create();
  }
  ionViewWillEnter(){
   this.loadingMod.present();
  }

  ionViewDidLoad() {
    let goodsId = this.navParams.get('goodsId');
    this.goodsDetailService.getGoodsDetail({ goodsId: goodsId }).subscribe(data => {
      console.log(data);
      this.goods = data['data']['goods'];
      this.currentPics = this.goods.images.split('&&');
      this.loadingMod.dismiss();
    });
  }

}
