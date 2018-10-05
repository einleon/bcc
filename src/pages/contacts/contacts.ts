import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UserLogin} from "../../model/userLogin";
import { AngularFireAuth} from "angularfire2/auth";

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase";
/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

 //user = {} as UserProfile;

 // users: Observable<User[]>;
 // usersCollectionRef: AngularFirestoreCollection<User>;

  constructor(private afAuth: AngularFireAuth,
              private navCtrl: NavController,
              public navParams: NavParams,
              //public afs: AngularFirestore
  ) {
  //  this.usersCollectionRef = this.afs.collection('users');
  //  this.users = this.usersCollectionRef.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
    this.initApp();
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
