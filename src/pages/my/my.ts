import { ValidationProvider } from './../../providers/validation/validation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocalStorageService } from 'ngx-webstorage';


@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private loacalStorage: LocalStorageService,
    private validation: ValidationProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
    // this.viewCtrl.dismiss();
    
  }

}
