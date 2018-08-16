import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataFinder} from "../../providers/datafinder";


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataFinder: DataFinder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.dataFinder.getJSONDataAsync("./assets/data/profile_data.json").then(data => {
      this.SetQueryOptionsData(data);
    });
    this.state = true;
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
        "<div id=\"name\">" + this.firstname + " " + this.lastname + "</div>" +
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
}
