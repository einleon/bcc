import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";


import {UserProfile} from "../../model/userProfile";
import {SignupPage} from "../signup/signup";




export interface UserProfile2 {
  firstname: string;
  lastname: string;

}

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'createProfile.html',
})

export class CreateProfilePage {

  user = {} as UserProfile;

  userCollection: AngularFirestoreCollection<UserProfile2>; //Firestore collection
  userTest: Observable<UserProfile2[]>; // read collection


  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProfilePage');
    this.userCollection = this.afs.collection('users'); //ref()
    this.userTest = this.userCollection.valueChanges()

    //this.user.mail = SignupPage.getMail();
  }

  test(user : UserProfile2) {
    this.userCollection.add({
      firstname: this.user.firstname,
      lastname: this.user.lastname
    })
      .then((result) => {
        console.log("Document addded with id >>> ", result.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}
