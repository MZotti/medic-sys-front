import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {  faEye, 
          faEdit, 
          faSearch,
          faAngleLeft,
          faAngleRight,
          faPlus,
          faPlusCircle,
          faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  
  faEye = faEye;
  faEdit = faEdit;
  faSearch = faSearch;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;
  faPlusCircle = faPlusCircle;
  faTrashAlt = faTrashAlt;

  schedules = [];
  schedulesFiltered = [];
  
  searchText = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.schedules = [
      {id: 1, person: 'Marcos Zotti', medic: 'Jair', area: 'Urologia', status: 'Finalizado', created: '01/11/2020 12:00'},
      {id: 2, person: 'Rafael Montedo', medic: 'Jair', area: 'Proctologia', status: 'Finalizado', created: '05/11/2020 13:30'},
      {id: 3, person: 'Mikhael Bitelo', medic: 'Jair', area: 'Hematologia', status: 'Finalizado', created: '08/11/2020 16:00'},
    ]
    this.schedulesFiltered = this.schedules;
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  searchBox() {
    if(this.searchText == ''){
      this.schedulesFiltered = this.schedules;
    }else{
      this.schedulesFiltered = this.filterItems(this.searchText);
    }
  }

  filterItems(query) {
    let result;
    result = this.schedules.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })

    if(result.length == 0)
      result = this.schedules.filter(function(el) {
        return el.created.indexOf(query) > -1;
      })

    console.log(result);
    return result;
  }

}
