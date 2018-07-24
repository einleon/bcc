import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CardPage} from "../card/card";
import {ProfilePage} from "../profile/profile";
import {ContactsPage} from "../contacts/contacts";
import {SearchPage} from "../search/search";
import {ScanPage} from "../scan/scan";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactsPage;
  tab2Root = SearchPage;
  tab3Root = ScanPage;
  tab4Root = CardPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
