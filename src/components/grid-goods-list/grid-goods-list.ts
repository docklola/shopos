import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-goods-list',
  templateUrl: 'grid-goods-list.html'
})
export class GridGoodsListComponent {

  @Input() goods;

  constructor(
    public navCtrl: NavController) {
  }

  goDetail(goodsId) {
    this.navCtrl.push('GoodsDetailPage', { goodsId: goodsId });
  }

}
