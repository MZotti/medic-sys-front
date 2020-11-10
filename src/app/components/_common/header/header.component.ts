import { Component, OnInit } from '@angular/core';

import { faUser, faBell, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  faBell = faBell;
  faUserCog = faUserCog;
  faSignOutAlt = faSignOutAlt;

  showProfileTab = false;
  showNotificationsTab = false;

  hasNotification = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleHeaderTabs(tab){
    if(tab == 1){
      this.showProfileTab = false;
      this.showNotificationsTab = !this.showNotificationsTab;
    }

    if(tab == 2){
      this.showNotificationsTab = false;
      this.showProfileTab = !this.showProfileTab;
    }

  }

}
