import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { data} from '../../pages/authentication/register/data';
import { ResponseMessage } from '../../shared/ResponseMessage';

@Injectable()
export class RegisterService {

  constructor(private restangular: Restangular) { }

  submitUser(user: data): Observable<ResponseMessage>  {

    return this.restangular.all('organizacion/registrar').post(user);
  }
}
