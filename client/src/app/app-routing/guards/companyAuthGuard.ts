import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class CompanyAuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {

    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {
      console.log(user.role);
      if (user.role === 'company') {
        return true;
      }
    }

    // todo: redirect user to the login page
    this.router.navigate(['']);

    return false
  }
}
