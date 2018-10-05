import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";


import {UserProfile} from "../../model/userProfile";
import {SignupPage} from "../signup/signup";
import * as firebase from "firebase";


export interface UserProfile2 {
  firstname: string;
  lastname: string;
  location: string;
  company: string;
  job: string;
  slogan: string;
  topskill1: string;
  topskill2: string;
  topskill3: string;
  userID: any;
}

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'createProfile.html',
})

export class CreateProfilePage {

  userInt = {} as UserProfile;

  userCollection: AngularFirestoreCollection<UserProfile2>; //Firestore collection
  userTest: Observable<UserProfile2[]>; // read collection


  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProfilePage');
    this.initApp();
    this.userCollection = this.afs.collection('users'); //ref()
    this.userTest = this.userCollection.valueChanges()

    //this.user.mail = SignupPage.getMail();
  }

  test(user: UserProfile2) {

    this.userCollection.add({
      firstname: this.userInt.firstname,
      lastname: this.userInt.lastname,
      location: this.userInt.location,
      company: this.userInt.company,
      job: this.userInt.job,
      slogan: this.userInt.slogan,
      topskill1: this.userInt.topskill1,
      topskill2: this.userInt.topskill2,
      topskill3: this.userInt.topskill3,
      userID: this.userInt.userID
    })
      .then((result) => {
        console.log("Document addded with id >>> ", result.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User wurde eingeloggt! JUHU");
        console.log("Email: " + user.email);
        console.log("EmailVerified: " + user.emailVerified);
        console.log("Anonym: " + user.isAnonymous);
        console.log("UID: " + user.uid);

        this.userInt.userID = user.uid;

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
