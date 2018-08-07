import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  options: BarcodeScannerOptions;
  encodText: string='';
  encodedData: any={};
  scannedData: any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner:BarcodeScanner) {
  }

  scan(){
    this.options= {
      prompt: 'Scan your barcode'
    };
    this.scanner.scan().then((data) => {
      this.scannedData = data;
    },(err) => {
      console.log("Error: ", err);
    })
    console.log("Scan ausgeführt!");
  }

  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodedData = data;
    },(err) => {
      console.log("Error: ", err);
    })
    console.log("Encode ausgeführt!");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

}
