import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LocalStorage } from 'ngx-webstorage';
import { User } from '../../model/user';
import { EnvironmentProvider } from '../../providers/environment/environment';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @LocalStorage()
  public memberInfo: User;
  @LocalStorage()
  public userId: string;
  @LocalStorage()
  private token: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginService: LoginProvider,
    private environment: EnvironmentProvider
  ) {
  }

  ionViewDidLoad() {
     this.login();
  }
  login() {
    let a = { username: '15726814825', password: '123456', timestamp: new Date().valueOf() };
    this.loginService.login(a).subscribe(data => {
      if (data.msg === 'OK') {
        this.userId = data['data']['userId'];
        this.token = data['data']['token'];
        this.getMemberInfo();
      }
    });
  }

  getMemberInfo() {
    this.loginService.getMemberInfo().subscribe(data => {
      this.memberInfo = data['data']['memberInfo'];
      this.environment.user = this.memberInfo;
      console.log(this.environment.user);
    })
  }
}
