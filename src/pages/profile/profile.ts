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

    console.log(this.experience);
    console.log(this.experience.length);


  }

}
