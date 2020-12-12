import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {  
          faFileDownload,
          faSearch,
          faAngleLeft,
          faAngleRight,
          faPlus,
          faPlusCircle,
          faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  faFileDownload = faFileDownload;
  faSearch = faSearch;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;
  faPlusCircle = faPlusCircle;
  faTrashAlt = faTrashAlt;

  report = [];
  reportsFiltered = [];
  
  searchText = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.report = [
      {id: 1, name: 'arquivo', source: 'Usuários', size: '20 Kb', created: '01/11/2020'},
      {id: 2, name: 'arquivo_2', source: 'Beneficiários', size: '32 Kb', created: '01/11/2020'},
      {id: 3, name: 'arquivo_3', source: 'Consultas', size: '57 Kb', created: '01/11/2020'},
    ]
    this.reportsFiltered = this.report;
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  searchBox() {
    if(this.searchText == ''){
      this.reportsFiltered = this.report;
    }else{
      this.reportsFiltered = this.filterItems(this.searchText);
    }
  }

  filterItems(query) {
    let result;
    result = this.report.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })

    if(result.length == 0)
      result = this.report.filter(function(el) {
        return el.source.toLowerCase().indexOf(query) > -1;
      })

    console.log(result);
    return result;
  }

}
