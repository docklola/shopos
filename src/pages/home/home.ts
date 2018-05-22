import { HomeService } from './../../providers/home-service/home-service';
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Content, Refresher } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;
  @ViewChild(Refresher) refresher: Refresher;
  currentPics;
  homeGoods;
  isSearchBarShow: boolean = true;
  constructor(public navCtrl: NavController, private homeService: HomeService) {

  }

  ionViewDidEnter() {
    this.getBanner();
    // this.getHomeGoodsList();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getBanner() {
    this.homeService.getBannerList().subscribe(res => {
      this.currentPics = res['data']['data'];
      // console.log(this.currentPics);
    });
  }

  // getHomeGoodsList() {
  //   this.homeService.getHomeGoodsList().subscribe(res => {
  //     this.homeGoods = res['data']['goods'];
  //     console.log(this.homeGoods,1);
  //   })
  // }

}
