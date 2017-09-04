import { Injectable } from '@angular/core';
import { data} from '../../login/data';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class LoginService {

  constructor(private restangular: Restangular) { }

  authenticate(user: data): Observable<boolean> {

    return this.restangular.all('organizacion/login').post(user);

    // todo: map the response to a "Response" object

  }

}
