import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.experience_data = [
      { year: "2018", job: "BA at MCI" },
      { year: "2017", job: "Hilfsarbeiter McDonalds" },
      { year: "2016", job: "Müllmann" },
      { year: "2015", job: "Arbeitslos" }
    ];

    this.skill_data = [
      { number: "1", skill: "Web-development" },
      { number: "2", skill: "Agile project manager" },
      { number: "3", skill: "Java Developer" },
    ];

    this.skillCollection = [];
    this.skillCollection.push(this.skill_data);
    this.skilldata = this.skillCollection[Math.floor((Math.random() * this.skillCollection.length))];
    console.log(this.skilldata);


    this.experienceCollection = [];
    this.experienceCollection.push(this.experience_data);
    this.experiencedata = this.experienceCollection[Math.floor((Math.random() * this.experienceCollection.length))];
    console.log(this.experiencedata);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
