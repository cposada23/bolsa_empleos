// librerias, modulos

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Restangular, RestangularModule} from 'ngx-restangular';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';

// servicios

import { EmpresaService } from './services/organizacion/empresa.service';
import { RegisterService } from './services/organizacion/register.service';
import { LoginService } from './services/organizacion/login.service';

// values

import { baseURL } from './shared/baseurl';

// config files

import { RestangularConfigFactory } from './shared/restConfig';
import { CompanyAuthGuard } from './app-routing/guards/companyAuthGuard'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    CompanyDashboardComponent
  ],
  imports: [
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    EmpresaService,
    RegisterService,
    LoginService,
    CompanyAuthGuard,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
