import { Component, OnInit } from '@angular/core';

import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  faCamera = faCamera;

  constructor() { }

  ngOnInit(): void {
  }

}
