import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CardPage} from "../pages/card/card";
import {ContactsPage} from "../pages/contacts/contacts";
import {ProfilePage} from "../pages/profile/profile";
import {ScanPage} from "../pages/scan/scan";
import {SearchPage} from "../pages/search/search";
import {StartPage} from "../pages/start/start";
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {DataFinder} from '../providers/datafinder';
import {HttpModule} from "@angular/http";
import {CreateProfilePage} from "../pages/createProfile/createProfile";

import {firebaseConfig} from "./credentials";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CardPage,
    ContactsPage,
    ProfilePage,
    ScanPage,
    SearchPage,
    StartPage,
    LoginPage,
    SignupPage,
    CreateProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp, {
        tabsHideOnSubPages: true,
      }, {}
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CardPage,
    ContactsPage,
    ProfilePage,
    ScanPage,
    SearchPage,
    StartPage,
    LoginPage,
    SignupPage,
    CreateProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataFinder,
    AngularFireAuth
  ]
})
export class AppModule {
}
