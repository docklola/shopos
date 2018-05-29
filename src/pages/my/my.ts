import { User } from './../../model/user';
import { ValidationProvider } from './../../providers/validation/validation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';


@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  memberInfo: User;
  @LocalStorage()
  isLogin: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private loacalStorage: LocalStorageService,
    private validation: ValidationProvider) {
    this.memberInfo = new User();
    this.memberInfo.nickname = '未登录';
    this.memberInfo.photo = 'sa';
  }

  ionViewDidLoad() {
    this.loacalStorage.observe('memberInfo').subscribe(data => {
      this.memberInfo = data;
    });
    // this.viewCtrl.dismiss();
    // this.navCtrl.push('LoginPage');
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  goSetting() {
    this.login()

  }

}
