import { Component, OnInit } from '@angular/core';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  faSpinner = faSpinner;

  constructor() { }

  ngOnInit(): void {
  }

}
