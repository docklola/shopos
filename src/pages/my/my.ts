import { User } from './../../model/user';
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

  memberInfo:User = new User();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private loacalStorage: LocalStorageService,
    private validation: ValidationProvider) {
      this.memberInfo = this.loacalStorage.retrieve('memberInfo');
      console.log(this.memberInfo);
  }


  ionViewDidLoad() {
    
    // this.viewCtrl.dismiss();
    // this.navCtrl.push('LoginPage');
  }

}
