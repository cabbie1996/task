import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  dataColumn: string[] = ['1', '2', '3', '4', '5']
  DataSource = new MatTableDataSource()

  constructor(public service: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.DataSource.data = this.service.enrollClassData
    console.log(this.DataSource.data)
  }
  unenroll(item) {
    this.service.enrollClassData.splice(this.service.enrollClassData.indexOf(item), 1)
    let val = this.service.enrollStatus(item)
    this.service.allClassData.push(val)
    this.getAll()
  }
  applyFilter(filterValue: string) {
    this.DataSource.filter = filterValue.trim().toLowerCase();
  }
}
