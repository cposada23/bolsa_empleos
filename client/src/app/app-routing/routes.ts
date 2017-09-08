import { Routes} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegisterComponent} from '../register/register.component';
import { LoginComponent} from '../login/login.component';
import { CompanyDashboardComponent} from '../company-dashboard/company-dashboard.component';
import { CompanyAuthGuard} from '../guards/companyAuthGuard';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  // todo: set a new subrouter outlet ?
  {path: 'dashboard', component: CompanyDashboardComponent, canActivate: [CompanyAuthGuard]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
