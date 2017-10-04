import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Job } from '../../models/organizacion/job';


@Injectable()
export class JobListService {

  private jobSubject = new Subject<Job>();
  public jobEvent = this.jobSubject.asObservable();

  constructor() { }

  triggerEvent(job: Job) {
   this.jobSubject.next(job);
  }

  // todo: return all available jobs
}
