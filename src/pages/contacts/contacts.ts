import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {User} from "../../model/user";
import { AngularFireAuth} from "angularfire2/auth";

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
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

  user = {} as User;

  users: Observable<User[]>;
  usersCollectionRef: AngularFirestoreCollection<User>;

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
  }

}
