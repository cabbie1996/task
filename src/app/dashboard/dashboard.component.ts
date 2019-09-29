import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menuItems = [
    { name: 'Available Classes', route: '/dashboard/home' },
    { name: 'Enroll Classes', route: '/dashboard/enroll' },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

}
