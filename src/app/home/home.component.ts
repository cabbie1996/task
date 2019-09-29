import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataColumn: string[] = ['1', '2', '3', '4', '5']
  DataSource = new MatTableDataSource()

  constructor(public service: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.DataSource.data = this.service.allClassData
    console.log(this.DataSource.data)
  }
  enroll(item) {
    this.service.allClassData.splice(this.service.allClassData.indexOf(item), 1)
    let val = this.service.enrollStatus(item)
    this.service.enrollClassData.push(val)
    this.getAll()
  }
  applyFilter(filterValue: string) {
    this.DataSource.filter = filterValue.trim().toLowerCase();
  }
}
