import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {UserLogin} from "../../model/userLogin";
import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
})
export class LoginPage {

  user = {} as UserLogin;




constructor(private afAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user : UserLogin) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.mail, user.password);
      console.log(result);
      if (result) {
        this.navCtrl.push(TabsPage);
      }

    }
    catch (e) {
      console.log(e);
    }
  }
}
