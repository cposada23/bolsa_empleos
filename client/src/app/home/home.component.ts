import {Component, Inject, OnInit} from '@angular/core';
import { Empresa } from '../models/organizacion/empresa';
import { EmpresaService} from '../services/organizacion/empresa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  empresas: Empresa[];
  errMess: String;

  constructor(private empresaService: EmpresaService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.empresaService.getEmpresas()
      .subscribe(
        empresas => {
          this.empresas = empresas;
        },
        errmess => {
          this.errMess = <any>errmess;
        });
  }

}
