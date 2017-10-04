export class Job {
  // todo: add a field of job applicants
  jobName: String;
  expiryDate: String;

  constructor(jobName: string, expiryDate: string) {
    this.jobName = jobName;
    this.expiryDate = expiryDate;
  }
}
