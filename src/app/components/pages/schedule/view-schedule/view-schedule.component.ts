import { Component, OnInit } from '@angular/core';

import {  faEdit, 
          faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.scss']
})
export class ViewScheduleComponent implements OnInit {
  
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
