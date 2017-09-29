export class Data {
  user: Object;
  content: Content;

  constructor(content: Content) {
    this.content = content;
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }
}

class Content {
  jobName: string;
  description: string;
  cadidateType: string;
  languagues: string;
  expiryDate: string;
  salary: number;
  jobType: string;
  technicalRole: string;
  urgent: boolean;
}
