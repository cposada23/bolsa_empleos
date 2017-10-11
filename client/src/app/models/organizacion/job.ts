export class Job {

  _id: number;
  jobName: String;
  expiryDate: String;

  // todo: add a field of quantity from job applicants

  constructor(jobName: string, expiryDate: string) {
    this.jobName = jobName;
    this.expiryDate = expiryDate;
  }
}
