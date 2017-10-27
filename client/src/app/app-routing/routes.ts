import { Routes} from '@angular/router';

import { HomeComponent} from '../pages/home/home.component';
import { RegisterComponent} from '../pages/authentication/register/register.component';
import { CompanyDashboardComponent} from '../pages/employer-page/company-dashboard/company-dashboard.component';
import { CompanyAuthGuard} from './guards/companyAuthGuard';
import { DashboardTableComponent } from '../pages/employer-page/dashboard-table/dashboard-table.component';
import { RegisterUserComponent } from '../pages/candidate-page/register-user/register-user.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'userRegistration', component: RegisterUserComponent},
  {path: 'dashboard', component: CompanyDashboardComponent, canActivate: [CompanyAuthGuard], children: [
    {path: '', component: DashboardTableComponent },
  ]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
