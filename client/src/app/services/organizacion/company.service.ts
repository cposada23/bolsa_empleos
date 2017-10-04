import { Injectable } from '@angular/core';
import { Restangular} from 'ngx-restangular';
import { Company} from '../../models/organizacion/company';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  constructor(private restangular: Restangular) {}

  getEmpresas(): Observable<Company[]> {
    return this.restangular.all('organizacion/listar').getList();
    // return this.restangular.allUrl(,'http://localhost:3000/organizacion/listar');
  }
}
