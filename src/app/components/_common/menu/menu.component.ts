import { Component, OnInit } from '@angular/core';

import { faHome, faCalendarPlus, faCalendarAlt,faHospitalUser, faUsers, faFileInvoice, faSwatchbook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faHome = faHome;
  faCalendarPlus = faCalendarPlus
  faCalendarAlt = faCalendarAlt;
  faHospitalUser = faHospitalUser;
  faUsers = faUsers;
  faFileInvoice= faFileInvoice
  faSwatchbook = faSwatchbook;

  constructor() { }

  ngOnInit(): void {
  }

}
