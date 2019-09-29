import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  allClassData=[ 
    {id:1,class:"I A", noStudents:19,capacity:100,enroll:false},
  {id:2,class:"II A", noStudents:19,capacity:100,enroll:false},
  {id:3,class:"III A", noStudents:19,capacity:100,enroll:false},
  {id:4,class:"IV A", noStudents:19,capacity:100,enroll:false},
  {id:5,class:"V A", noStudents:19,capacity:100,enroll:false},
  {id:6,class:"VI A", noStudents:19,capacity:100,enroll:false},
  {id:7,class:"VII A", noStudents:19,capacity:100,enroll:false},
  {id:8,class:"VIII A", noStudents:19,capacity:100,enroll:false},
  {id:9,class:"IX A", noStudents:19,capacity:100,enroll:false},
  {id:10,class:"X A", noStudents:19,capacity:100,enroll:false},
  {id:11,class:"XI A", noStudents:19,capacity:100,enroll:false},
  ]
  enrollClassData=[ 
    {id:12,class:"I B", noStudents:19,capacity:100, enroll:true},
  {id:13,class:"II B", noStudents:19,capacity:100,enroll:true},
  {id:14,class:"III B", noStudents:19,capacity:100,enroll:true},
  {id:15,class:"IV B", noStudents:19,capacity:100,enroll:true},
  {id:16,class:"V B", noStudents:19,capacity:100,enroll:true},
  {id:17,class:"VI B", noStudents:19,capacity:100,enroll:true},
  {id:18,class:"VII B", noStudents:19,capacity:100,enroll:true},
  {id:19,class:"VIII B", noStudents:19,capacity:100,enroll:true},
  {id:20,class:"IX B", noStudents:19,capacity:100,enroll:true},
  {id:21,class:"X B", noStudents:19,capacity:100,enroll:true},
  {id:22,class:"XI B", noStudents:19,capacity:100,enroll:true},
  ]
  constructor(private http: HttpClient) { }
  // getAllContact() {
  //   return this.allClassData
  // }
  enrollStatus(item){
    if(item.enroll){
      item.enroll=false
    }
    else{
      item.enroll=true
    }
    return item
  }

}
