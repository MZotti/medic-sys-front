import { Component, OnInit } from '@angular/core';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss']
})
export class LoadingIconComponent implements OnInit {

  faSpinner = faSpinner;

  constructor() { }

  ngOnInit(): void {
  }

}
