import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";
import {TabsPage} from "../tabs/tabs";


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {

    console.log('User Test Variablen folgen:');
    let userTest1 = firebase.auth().currentUser;
    let userTest2 = this.afAuth.auth.currentUser;
    console.log(userTest1);
    console.log(userTest2);

    console.log("Funktion Autologin: ");
    this.autologin(this.initApp());
  }

  pushlogin(): void {
    this.navCtrl.push(LoginPage);
  }

  pushsignup(): void {
    this.navCtrl.push(SignupPage);
  }

  autologin(a) {
    console.log("A HAT FOLGENDEN WERT: " + a);
    if (a == 1) {
      this.navCtrl.push(TabsPage);
    }
  }

  async logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("UID: " + user.uid);
        //  this.navCtrl.push(TabsPage);
        return 1;
      } else {
        console.log("User nicht eingeloggt");
        return 0;
      }
    });
    return 3;
  }
}
