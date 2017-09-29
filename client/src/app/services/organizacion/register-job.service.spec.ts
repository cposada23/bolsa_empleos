import { TestBed, inject } from '@angular/core/testing';

import { RegisterJobService } from './register-job.service';

describe('RegisterJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterJobService]
    });
  });

  it('should be created', inject([RegisterJobService], (service: RegisterJobService) => {
    expect(service).toBeTruthy();
  }));
});
