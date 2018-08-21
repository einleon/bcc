import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {User} from "../../model/user";
import { AngularFireAuth} from "angularfire2/auth";
import { AlertController } from 'ionic-angular';


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


  user = {} as User;

// users: Observable<User[]>;
// usersCollectionRef: AngularFirestoreCollection<User>;

  constructor(  private afAuth: AngularFireAuth,
                  private navCtrl: NavController,
                  public navParams: NavParams,
                  public alertCtrl: AlertController
                 // public afs: AngularFirestore
                ) {

    //this.usersCollectionRef = this.afs.collection('users');
    //this.users = this.usersCollectionRef.valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async signup(user:User){

    console.log("Function Signup ausgeführt");

    if (this.user.password == this.user.passwordTest) {

      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
        console.log(result);
        if (result) {

          //  this.usersCollectionRef.add({email: user.email, password: user.password, firstname: user.firstname, lastname: user.lastname, company: user.company, place: user.place, slogan: user.slogan, topskill1: user.topskill1});

          this.navCtrl.push(TabsPage);
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
