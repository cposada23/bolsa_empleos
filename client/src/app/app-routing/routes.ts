import { Routes} from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent} from '../pages/authentication/register/register.component';
import { LoginComponent} from '../pages/authentication/login/login.component';
import { CompanyDashboardComponent} from '../pages/company-dashboard/company-dashboard.component';
import { CompanyAuthGuard} from './guards/companyAuthGuard';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  // todo: set a new subrouter outlet ?
  {path: 'dashboard', component: CompanyDashboardComponent, canActivate: [CompanyAuthGuard]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
