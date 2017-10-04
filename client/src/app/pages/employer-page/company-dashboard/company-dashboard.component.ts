import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  username;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('currentUser')).user;
  }

  onLogOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['home']);
  }
}
