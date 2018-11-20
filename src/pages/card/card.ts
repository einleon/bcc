import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataFinder} from "../../providers/datafinder";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import {UserData} from "../../model/UserData";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";


@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  card: any;
  state: boolean;
  firstname: any;
  lastname: any;
  mail: any;
  slogan: any;
  job: any;
  company: any;
  experience: any[];
  topskill1: any;
  topskill2: any;
  topskill3: any;
  phone: any;
  street: any;
  street_number: any;
  place: any;
  design_card: any;

  userDoc: AngularFirestoreDocument<UserData>;
  user: Observable<UserData>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataFinder: DataFinder, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getUserData();
    this.dataFinder.getJSONDataAsync("./assets/data/profile_data.json").then(data => {
      this.SetQueryOptionsData(data);
    });
    this.state = true;
  }

  getUserData() {
    this.userDoc = this.afs.doc('users/' + firebase.auth().currentUser.uid);
    this.user = this.userDoc.valueChanges();

    console.log(this.user);
    let userProfile = this.user;
    console.log("TESTLOG: " + userProfile);
  }


  /* Sets data with returned JSON array */
  SetQueryOptionsData(data: any) {
    //Array Data into Variables
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.mail = data.mail;
    this.slogan = data.slogan;
    this.job = data.job;
    this.company = data.company;
    this.experience = data.experience;
    this.topskill1 = data.topskill1;
    this.topskill2 = data.topskill2;
    this.topskill3 = data.topskill3;
    this.phone = data.phone;
    this.street = data.street;
    this.street_number = data.street_number;
    this.place = data.place;
    this.design_card = data.design_card;
  }

  switch() {
    console.log("Karte drehen");
    if (this.state == false) {
      this.card = "<ion-card>" +
        "    <img id = \"logo\" src=\"assets/imgs/mpd.png\"/>" +
        "</ion-card>" +
        "  </div>";
      document.getElementById("card").innerHTML = this.card;
      this.state = true;
    }
    else {
      this.card = "<ion-card>" +
        "<ion-card-content>" +
        "<div id='name'>{{(user | async)?.firstname}} {{(user | async)?.lastname}}</div>" +
        "<div id=\"adress\">" +
        this.street + " " + this.street_number + "<br>" +
        this.place +
        "</div>" +
        "<div id=\"contact\">" +
        this.phone + "<br>" +
        this.mail +
        "</div>" +
        "</ion-card-content>" +
        "</ion-card>";

      document.getElementById("card").innerHTML = this.card;
      this.state = false;
    }
  }

  async switch2() {
    document.querySelector("#myCard").classList.toggle("flip")
  }
}
