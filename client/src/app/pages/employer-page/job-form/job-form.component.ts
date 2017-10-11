import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

// clases

import { Data } from './data';
import { Job } from '../../../models/organizacion/job';
import { ResponseMessage } from '../../../shared/ResponseMessage';

// servicios

import { RegisterJobService } from '../../../services/organizacion/register-job.service';
import { JobListService } from '../../../services/organizacion/job-list.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  // todo: convert the date variable to a date object
  dateModel;

  jobForm: FormGroup;
  jobData: Data;
  errmess: ResponseMessage;

  candidateMessage = 'Candidate Type';
  candidateType = ['Student', 'graduated'];

  languageMessage = 'Languages';
  languages = ['English', 'Portuguese', 'German', 'French', 'Italian'];

  jobMessage = 'Job Type';
  jobType = ['Full time', 'Part time', 'Contract', 'Temporary', 'Apprentice'];

  roleMessage = 'Technical Role';
  roles = ['Analyst', 'Developer', 'Tester', 'Management', 'Architect'];

  urgencyMessage = 'High';
  urgency = true;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private registerJobService: RegisterJobService,
              private jobListService: JobListService) {
    this.createForm();
  }

  ngOnInit() {
  }

  onTypeSelected(candidateType: string) {
    this.candidateMessage = candidateType;

    this.jobForm.patchValue({
      candidateType: candidateType
    });
  }

  onLanguageSelected(language: string) {
    this.languageMessage = language;

    this.jobForm.patchValue({
      languages: language
    });
  }

  onJobSelected(job: string) {
    this.jobMessage = job;

    this.jobForm.patchValue({
      jobType: job
    });
  }

  onRoleSelected(role: string) {
    this.roleMessage = role;

    this.jobForm.patchValue( {
      technicalRole: role
    });
  }

  onTab() {

    if (this.urgency) {
      this.urgencyMessage = 'Low';
    } else {
      this.urgencyMessage = 'High'
    }

    this.urgency = !this.urgency;
    this.jobForm.patchValue({
      urgent: this.urgency
    });
  }

  onSetDate() {
    const date = this.dateModel.day + '/' + this.dateModel.month + '/' + this.dateModel.year;

    this.jobForm.patchValue({
      expiryDate: date
    });
  }

  createForm() {

    this.jobForm = this.formBuilder.group( {

      jobName: '',
      description: '',
      candidateType: '',
      languages: '',
      expiryDate: '',
      salary: 0,
      jobType: '',
      technicalRole: '',
      urgent: true
    });

    this.jobForm.valueChanges
      .subscribe( data => this.onValueChanged(data));
  }

  public  onValueChanged(data?: any) {

    if (!this.jobForm) { return }

    // todo: validate text-input fields and set error messages
  }

  onSubmit() {

    // todo: validate missing fields (unselected drop-downs) and set error messages

    this.jobData = new Data(this.jobForm.value);
    console.log(this.jobData);

    this.errmess = null;

    this.registerJobService.submitJob(this.jobData).subscribe(
      message => {

        // todo: set a success message

        const jobItem = new Job(this.jobData.content.jobName, this.jobData.content.expiryDate);
        this.jobListService.triggerEvent(jobItem);

        this.activeModal.close();
      },
      errmess => {
        this.errmess = errmess;
      }
    );
  }
}
