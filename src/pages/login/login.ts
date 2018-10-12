import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {UserLogin} from "../../model/userLogin";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";
import {ContactsPage} from "../contacts/contacts";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
})
export class LoginPage {

  user = {} as UserLogin;


  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.initApp();
  }

  async login(user: UserLogin) {
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

  initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User wurde eingeloggt! JUHU");
        console.log("Email: " + user.email);
        console.log("EmailVerified: " + user.emailVerified);
        console.log("Anonym: " + user.isAnonymous);
        console.log("UID: " + user.uid);

        /*
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        */
      } else {
        // User is signed out.
        // ...
        console.log("User nicht eingeloggt");
      }
    });
  }
}
