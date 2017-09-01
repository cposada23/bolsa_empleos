// librerias, modulos

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Restangular, RestangularModule} from 'ngx-restangular';
import { AppRoutingModule} from "./app-routing/app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// servicios

import { EmpresaService } from './services/organizacion/empresa.service';

// values

import { baseURL } from './shared/baseurl';

// config files

import { RestangularConfigFactory } from './shared/restConfig';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmpresaService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
