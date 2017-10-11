import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Data } from '../../pages/employer-page/job-form/data';
import { Observable } from 'rxjs/Observable';
import { ResponseMessage } from '../../shared/ResponseMessage';

@Injectable()
export class RegisterJobService {

  constructor(private restangular: Restangular) { }

  submitJob(job: Data): Observable<ResponseMessage> {

    return this.restangular.all('organizacion/nuevaOferta').post(job);
  }
}
