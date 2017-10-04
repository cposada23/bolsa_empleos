import {Component, Inject, OnInit} from '@angular/core';
import { Company } from '../../models/organizacion/company';
import { CompanyService } from '../../services/organizacion/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companies: Company[];
  errMess: String;

  constructor(private companyService: CompanyService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.companyService.getEmpresas()
      .subscribe(
        companies => {
          this.companies = companies;
        },
        errmess => {
          this.errMess = <any>errmess;
        });
  }

}
