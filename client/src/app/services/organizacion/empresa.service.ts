import { Injectable } from '@angular/core';
import { Restangular} from 'ngx-restangular';
import { Empresa} from '../../models/organizacion/empresa';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class EmpresaService {

  constructor(private restangular: Restangular) {}

  getEmpresas(): Observable<Empresa[]>{
    return this.restangular.all('organizacion/listar').getList();
    // return this.restangular.allUrl(,'http://localhost:3000/organizacion/listar');
  }
}
