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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  faEye = faEye;
  faEdit = faEdit;
  faSearch = faSearch;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;
  faPlusCircle = faPlusCircle;
  faTrashAlt = faTrashAlt;

  users = [];
  usersFiltered = [];
  
  searchText = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.users = [
      {id: 1, name: 'Marcos Zotti', role: 'Admin', status: 'Ativo', created: '01/11/2020'},
      {id: 2, name: 'Rafael Montedo', role: 'Admin', status: 'Ativo', created: '05/11/2020'},
      {id: 3, name: 'Mikhael Bitelo', role: 'Admin', status: 'Ativo', created: '08/11/2020'},
    ]
    this.usersFiltered = this.users;
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  searchBox() {
    if(this.searchText == ''){
      this.usersFiltered = this.users;
    }else{
      this.usersFiltered = this.filterItems(this.searchText);
    }
  }

  filterItems(query) {
    let result;
    result = this.users.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })

    if(result.length == 0)
      result = this.users.filter(function(el) {
        return el.created.indexOf(query) > -1;
      })

    console.log(result);
    return result;
  }

}
