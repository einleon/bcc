import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  pushlogin():void{
    this.navCtrl.push(LoginPage);
  }

  pushsignup():void {
    this.navCtrl.push(SignupPage);
  }

}
