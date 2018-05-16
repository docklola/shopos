import { HomeService } from './../../providers/home-service/home-service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentPic;
  constructor(public navCtrl: NavController, private homeService: HomeService) {

  }

  async ionViewCanEnter() {
    this.homeService.getBannerList().subscribe(res => {
      console.log(res);
    });
  }

}
