import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {User} from "../../model/user";
import { AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AngularFireAuth]
})
export class SignupPage {


  user = {} as User;

  constructor( private afAuth: AngularFireAuth,
    private navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async signup(user:User){

    console.log("Kölbö!");

    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
      if (result) {
        this.navCtrl.push(TabsPage);
      }

    }
    catch (e) {
      console.error(e);
    }
  }
}
