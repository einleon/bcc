import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataFinder} from "../../providers/datafinder";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

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


/*
  all_data: any;
  all_dataCollection: any;
  alldata: any;

  userData: any;
  contactData: any;
  experienceData: any;
  skillData: any;
  contactDataCollection: any;
  userDataCollection: any;
  experienceCollection: any;
  skillCollection: any;
  userLog: any;
  contactLog: any;
  experienceLog: any;
  skillLog: any;

*/

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataFinder : DataFinder) {

    /*
    this.userData = [
      {slogan: "Young - motivated - dynamic", job: "CEO", company: "Kölbö"},
      {firstname: "Perl", lastname: "Scheter"},
      {design_card: "error404"}
    ]

    this.contactData = [
      {phone: "+43 680 12345678"},
      {address: "Radezkystraße 2"},
      {place: "Lustenau"},
      {postcode: "6890"},
      {mail: "ichwillbier@gmail.com"}
    ]

    this.experienceData = [
      {year: "2018", done_job: "BA at MCI"},
      {year: "2017", done_job: "Hilfsarbeiter McDonalds"},
      {year: "2016", done_job: "Müllmann"},
      {year: "2015", done_job: "Arbeitslos"}
    ]

    this.skillData = [
      {skill: "Web-development"},
      {skill: "Agile project manager"},
      {skill: "Java Developer"},
    ]

    this.all_data = [
      {firstname: "Perl", lastname: "Scheter"},
      {mail: "ichwillbier@gmail.com"},
      {slogan: "Young - motivated - dynamic"},
      {job: "CEO", company: "Kölbö"},
      {year: "2018", job: "BA at MCI"},
      {year: "2017", job: "Hilfsarbeiter McDonalds"},
      {year: "2016", job: "Müllmann"},
      {year: "2015", job: "Arbeitslos"},
      {topskill1: "Web-development"},
      {topskill2: "Agile project manager"},
      {topskill3: "Java Developer"},
      {phone: "+43 680 12345678"},
      {address: "Radezkystraße 2"},
      {place: "Lustenau"},
      {design_card: "error404"}
    ]

    this.all_dataCollection = [];
    this.all_dataCollection.push(this.all_data);
    this.alldata = this.all_dataCollection[Math.floor((Math.random() * this.all_dataCollection.length))];
    console.log(this.alldata);

    this.userDataCollection = [];
    this.userDataCollection.push(this.userData);
    this.userLog = this.userDataCollection[Math.floor((Math.random() * this.userDataCollection.length))];
    console.log(this.userLog);

    this.experienceCollection = [];
    this.experienceCollection.push(this.experienceData);
    this.experienceLog = this.experienceCollection[Math.floor((Math.random() * this.experienceCollection.length))];
    console.log(this.experienceLog);

    this.skillCollection = [];
    this.skillCollection.push(this.skillData);
    this.skillLog = this.skillCollection[Math.floor((Math.random() * this.skillCollection.length))];
    console.log(this.skillLog);

    this.contactDataCollection = [];
    this.contactDataCollection.push(this.contactData);
    this.contactLog = this.contactDataCollection[Math.floor((Math.random() * this.contactDataCollection.length))];
    console.log(this.contactLog);
    */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.dataFinder.getJSONDataAsync("./assets/data/profile_data.json").then(data => {
    this.SetQueryOptionsData(data);
  });
  }

  /* Sets data with returned JSON array */
  SetQueryOptionsData(data : any) {
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

    console.log(this.firstname);
    console.log(this.experience);
  }

}
