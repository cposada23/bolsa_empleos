// librerias

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Restangular, RestangularModule} from 'ngx-restangular';

// componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// servicios

import { EmpresaService } from './services/organizacion/empresa.service';

// values

import { baseURL } from './shared/baseurl';

// config files

import { RestangularConfigFactory } from './shared/restConfig';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    EmpresaService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
