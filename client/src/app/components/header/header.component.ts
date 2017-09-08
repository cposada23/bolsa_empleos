import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../pages/authentication/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(LoginComponent);
  }

}
