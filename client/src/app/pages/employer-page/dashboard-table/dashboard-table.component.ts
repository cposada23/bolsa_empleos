import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobFormComponent } from '../job-form/job-form.component';

// servicios

import { JobListService } from '../../../services/organizacion/job-list.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  // todo: set a new class to store an array of jobs

  constructor(private modalService: NgbModal,
              private jobListService: JobListService) {

    // todo: invoke a service to return all available jobs
    // todo: listen for new list-job changes
    this.jobListService.jobEvent.subscribe((job) => console.log('success'));
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(JobFormComponent, {windowClass: 'modal-style', keyboard: false});
  }

}
