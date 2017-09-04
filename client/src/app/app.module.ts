// librerias, modulos

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Restangular, RestangularModule} from 'ngx-restangular';
import { AppRoutingModule} from "./app-routing/app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// servicios

import { EmpresaService } from './services/organizacion/empresa.service';
import { RegisterService } from './services/organizacion/register.service';
import { LoginService } from './services/organizacion/login.service';

// values

import { baseURL } from './shared/baseurl';

// config files

import { RestangularConfigFactory } from './shared/restConfig';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
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
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
