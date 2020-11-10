import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {  faCheckCircle, 
          faExclamationCircle, 
          faTimesCircle, 
          faEye, 
          faEdit, 
          faEnvelope, 
          faSearch,
          faAngleLeft,
          faAngleRight, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  closeResult = '';

  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;
  faTimesCircle = faTimesCircle;
  faEye = faEye;
  faEdit = faEdit;
  faEnvelope = faEnvelope;
  faSearch = faSearch;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  people = [];
  peopleFiltered = [];
  searchText = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.people = [
      {id: 1, name: 'Marcos Zotti', created: '01/11/2020'},
      {id: 2, name: 'Rafael Montedo', created: '05/11/2020'},
      {id: 3, name: 'Mikhael Bitelo', created: '08/11/2020'},
    ]
    this.peopleFiltered = this.people;
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  searchBox() {
    if(this.searchText == ''){
      this.peopleFiltered = this.people;
    }else{
      this.peopleFiltered = this.filterItems(this.searchText);
    }
  }

  filterItems(query) {
    let result;
    result = this.people.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })

    if(result.length == 0)
      result = this.people.filter(function(el) {
        return el.created.indexOf(query) > -1;
      })

    console.log(result);
    return result;
  }

}
