import { Injectable } from '@angular/core';
import { data } from '../../pages/authentication/login/data';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';
import {ResponseMessage} from '../../shared/ResponseMessage';
import {UserToken} from '../../shared/UserToken';


@Injectable()
export class LoginService {

  errmess: ResponseMessage;
  userToken: UserToken;

  constructor(private restangular: Restangular) { }

  authenticate(user: data): Observable<Boolean> {

    return this.restangular.all('organizacion/login').post(user)
      .map(
        response => {
          this.userToken = new UserToken(response.user, response.role, response.token);
          this.userToken.setLocalStorage();
          // console.log(JSON.stringify(this.userToken));

          return true;
        },
        errmess => {
          this.errmess = errmess;
          console.log(errmess);
          return false;
        }
      );
  }

}
