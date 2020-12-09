import { Component, OnInit } from '@angular/core';

import {  faEdit, 
          faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
