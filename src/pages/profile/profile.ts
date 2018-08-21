import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataFinder} from "../../providers/datafinder";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

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



  constructor(public navCtrl: NavController, public navParams: NavParams, private dataFinder : DataFinder) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.dataFinder.getJSONDataAsync("./assets/data/profile_data.json").then(data => {
    this.SetQueryOptionsData(data);
  });
  }

  /* Sets data with returned JSON array */
  SetQueryOptionsData(data : any) {
    //Array Data into Variables
    this.firstname = data.firstname;
    this.lastname= data.lastname;
    this.mail= data.mail;
    this.slogan= data.slogan;
    this.job= data.job;
    this.company= data.company;
    this.experience= data.experience;
    this.topskill1= data.topskill1;
    this.topskill2= data.topskill2;
    this.topskill3= data.topskill3;
    this.phone= data.phone;
    this.street= data.street;
    this.street_number= data.street_number;
    this.place= data.place;
    this.design_card= data.design_card;

    //Generate HTML Experience Table String from the Experience Array.
    this.generateHTMLfromArray(this.experience);
    //Write out generated String
    document.getElementById("experience").innerHTML = this.Html;

  }

  generateHTMLfromArray(array) {
    array.sort(function(a, b){return b.year - a.year});

    this.Html = "<table id = 'customers'>";

    for (var i in array) {
      console.log("row " + i);
      this.Html += "<tr>";
      for (var j in array[i]) {
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
