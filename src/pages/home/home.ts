import { HomeService } from './../../providers/home-service/home-service';
import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  currentPics;
  constructor(public navCtrl: NavController, private homeService: HomeService) {

  }

  async ionViewWillEnter() {
   
  }

  ngOnInit() {
    this.homeService.getBannerList().subscribe(res => {
      this.currentPics = res['data']['data'];
      console.log(this.currentPics);
    });
  }

}
