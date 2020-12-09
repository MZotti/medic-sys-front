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
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  faEye = faEye;
  faEdit = faEdit;
  faSearch = faSearch;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;
  faPlusCircle = faPlusCircle;
  faTrashAlt = faTrashAlt;

  people = [];
  peopleFiltered = [];
  
  searchText = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.people = [
      {id: 1, name: 'Marcos Zotti', cpf: '800.100.00-00', plan: 'AAA', created: '01/11/2020'},
      {id: 2, name: 'Rafael Montedo', cpf: '800.200.00-00', plan: 'BBB', created: '05/11/2020'},
      {id: 3, name: 'Mikhael Bitelo', cpf: '800.300.00-00', plan: 'CCC', created: '08/11/2020'},
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
        return el.cpf.indexOf(query) > -1;
      })

    if(result.length == 0)
      result = this.people.filter(function(el) {
        return el.created.indexOf(query) > -1;
      })

    console.log(result);
    return result;
  }

}
