import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataFinder} from "../../providers/datafinder";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import 'firebase/firestore';
import * as firebase from "firebase";
import DocumentReference = firebase.firestore.DocumentReference;
import {Item} from "ionic-angular/umd";
import {Observable} from "rxjs/Observable";
import {UserLogin} from "../../model/userLogin";
import {UserData} from "../../model/UserData";


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

//Connect Useres to their data: https://stackoverflow.com/questions/30910704/how-do-i-link-each-user-to-their-data-in-firebase

export class ProfilePage {

  UserData = {} as UserData;

  //Create Variables
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
  Html: any;

  //private userDoc: AngularFirestoreDocument<any>;
  userCollectionRef: AngularFirestoreCollection<UserData>;
  //user$: Observable<UserData[]>;
  userDoc: AngularFirestoreDocument<UserData>;
  user: Observable<UserData>;

  constructor(private afs: AngularFirestore, public navCtrl: NavController, public navParams: NavParams, private dataFinder: DataFinder) {
    this.userCollectionRef = this.afs.collection<UserData>('users');
    //  this.user$ = this.userCollectionRef.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.writeUserProfile3();
    // console.log("Testlog: " + this.afs.doc('users/' + firebase.auth().currentUser.uid).ref.get());

    /*
        this.dataFinder.getJSONDataAsync("./assets/data/profile_data.json").then(data => {
          this.SetQueryOptionsData(data);
        });
    */
    //this.writeUserProfile();
  }

  writeUserProfile3() {
    this.userDoc = this.afs.doc('users/' + firebase.auth().currentUser.uid);
    this.user = this.userDoc.valueChanges();

    console.log(this.user);
  }

  writeUserProfile2() {
    // const document: AngularFirestoreDocument<Item> = afs.document('users/' + firebase.auth().currentUser.uid);

    // const document$: Observable<Item> = document.valueChanges()
  }


  writeUserProfile() {
    let db = firebase.firestore();
    let docRef = db.collection("users").doc(firebase.auth().currentUser.uid);


    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });


    /*
    let docTest = db.collection("users").doc(firebase.auth().currentUser.uid);
    docTest.get().then(function(documentSnapshot){

    });

    if (documentSnapshot.exists) {
      // do something with the data
    } else {
      console.log('document not found');
    }

    let data = documentSnapshot.data();


    // let userDoc = fireStore.doc<any>('users/' + firebase.auth().currentUser.uid);
*/
  }

  /*


   // Sets data with returned JSON array
   /*
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

     //Generate HTML Experience Table String from the Experience Array.
  //   this.generateHTMLfromArray(this.experience);
     //Write out generated String
     document.getElementById("experience").innerHTML = this.Html;
   }
   */

  generateHTMLfromArray(array) {
    array.sort(function (a, b) {
      return b.year - a.year
    });

    this.Html = "<table id = 'customers'>";

    for (let i in array) {
      console.log("row " + i);
      this.Html += "<tr>";
      for (let j in array[i]) {
        console.log(array[i][j]);
        this.Html += "<td>"
        this.Html += array[i][j];
        this.Html += "</td>"
      }
      this.Html += "</tr>"
    }
    this.Html += "</table>";

    console.log(this.Html);

  }

}
