import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobFormComponent } from '../job-form/job-form.component';

// clases

import { Job } from '../../../models/organizacion/job';

// servicios

import { JobListService } from '../../../services/organizacion/job-list.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  jobs: Job[];

  constructor(private modalService: NgbModal,
              private jobListService: JobListService) {

    const user = localStorage.getItem('currentUser');
    const token = JSON.parse(user).token;

    this.jobListService.getJobs(token).subscribe((jobs) => this.jobs = jobs);
    this.jobListService.jobEvent.subscribe((job) => this.jobs.unshift(job));
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(JobFormComponent, {windowClass: 'modal-style', keyboard: false});
  }
}
