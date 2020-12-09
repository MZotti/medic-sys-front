import { Component, OnInit } from '@angular/core';

import {  faEdit, 
          faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
