import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Subject } from 'rxjs/Subject';
import { Job } from '../../models/organizacion/job';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class JobListService {

  private jobSubject = new Subject<Job>();
  public jobEvent = this.jobSubject.asObservable();

  constructor(private restangular: Restangular) { }

  triggerEvent(job: Job) {
   this.jobSubject.next(job);
  }

  getJobs(token: string): Observable<Job[]> {

    return this.restangular.all('organizacion/listarOfertas').getList({}, {'x-access-token': token});
  }
}
