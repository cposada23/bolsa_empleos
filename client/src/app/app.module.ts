// librerias, modulos

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestangularModule} from 'ngx-restangular';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyDashboardComponent } from './pages/employer-page/company-dashboard/company-dashboard.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { JobFormComponent } from './pages/employer-page/job-form/job-form.component';
import { DashboardTableComponent } from './pages/employer-page/dashboard-table/dashboard-table.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
 import { RegisterUserComponent } from './pages/candidate-page/register-user/register-user.component';

// servicios

import { CompanyService } from './services/organizacion/company.service';
import { RegisterService } from './services/organizacion/register.service';
import { LoginService } from './services/organizacion/login.service';
import { RegisterJobService } from './services/organizacion/register-job.service';
import { JobListService } from './services/organizacion/job-list.service';

// values

import { baseURL } from './shared/baseurl';

// config files

import { RestangularConfigFactory } from './shared/restConfig';
import { CompanyAuthGuard } from './app-routing/guards/companyAuthGuard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    CompanyDashboardComponent,
    JobFormComponent,
    DashboardTableComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    Ng4GeoautocompleteModule.forRoot()
  ],
  entryComponents: [
    LoginComponent,
    JobFormComponent
  ],
  providers: [
    CompanyService,
    RegisterService,
    LoginService,
    RegisterJobService,
    CompanyAuthGuard,
    JobListService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
