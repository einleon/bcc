import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  all_data: any;
  all_dataCollection: any;
  alldata:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.all_data = [
      {year: "2018", job: "BA at MCI"},
      {year: "2017", job: "Hilfsarbeiter McDonalds"},
      {year: "2016", job: "Müllmann"},
      {year: "2015", job: "Arbeitslos"},
      {number: "1", skill: "Web-development"},
      {number: "2", skill: "Agile project manager"},
      {number: "3", skill: "Java Developer"},
      {firstname: "Perl", lastname: "Scheter"},
      {mobilenumber: "+43 680 12345678"},
      {address: "Radezkystraße 2, Lustenau"}
    ]

    this.all_dataCollection = [];
    this.all_dataCollection.push(this.all_data);
    this.alldata = this.all_dataCollection[Math.floor((Math.random() * this.all_dataCollection.length))];
    console.log(this.alldata);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
