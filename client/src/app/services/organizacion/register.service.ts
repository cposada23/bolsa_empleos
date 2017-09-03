import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import {data} from '../../register/data';
import { message } from '../../shared/message';

@Injectable()
export class RegisterService {

  constructor(private restangular: Restangular) { }

  submitUser(user: data): Observable<message>  {

    return this.restangular.all('organizacion/registrar').post(user);
  }

}
