import { HomeService } from './../../providers/home-service/home-service';
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;
  currentPics;
  isSearchBarShow: boolean = true;
  constructor(public navCtrl: NavController, private homeService: HomeService) {

  }

  ionViewDidEnter() {
    this.homeService.getBannerList().subscribe(res => {
      this.currentPics = res['data']['data'];
      console.log(this.currentPics);
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  scrollHandler(e) {
    if (this.content.contentTop === 0) {
      this.isSearchBarShow = true;
    }
    else {
      this.isSearchBarShow = false;
    }
    console.log(this.content.isScrolling);
  }

}
