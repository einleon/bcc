import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {UserLogin} from "../../model/userLogin";
import {AngularFireAuth} from "angularfire2/auth";
import {AlertController} from 'ionic-angular';
import {CreateProfilePage} from "../createProfile/createProfile";
import {UserProfile} from "../../model/userProfile";
import {User} from "firebase";
import {AngularFirestore} from "angularfire2/firestore";


/*
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
*/

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AngularFireAuth]
})

export class SignupPage {

  userProfile = {} as UserProfile;
  user = {} as UserLogin;
  private static mailreturn: any;

 // users: Observable<User[]>;
  //usersCollectionRef: AngularFirestoreCollection<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController
              // public afs: AngularFirestore
  ) {

   // this.usersCollectionRef = this.afs.collection('users');
   // this.users = this.usersCollectionRef.valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');

  }

  async signup() {

    console.log("Function Signup ausgeführt");

    if (this.user.password == this.user.passwordTest) {

      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.mail, this.user.password);
        console.log(result);
        if (result) {

          this.afs.doc(`users/${result.user.uid}`).set({
            email: result.user.email,
            firstname: "",
            lastname: ""
          }).then(console.log);

          console.log("Sign Up Test Log:" + this.user.mail);

          this.navCtrl.push(CreateProfilePage);
        }

      }
      catch (e) {
        console.error(e);
      }
    }
    else {
      const alert = this.alertCtrl.create({
        title: "Passwords doesn't match",
        subTitle: "Both Passwords need to be the same.",
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
