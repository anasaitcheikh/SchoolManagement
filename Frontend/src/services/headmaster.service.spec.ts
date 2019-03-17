import { TestBed, inject } from '@angular/core/testing';

import { HeadmasterService } from './headmaster.service';

describe('HeadmasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadmasterService]
    });
  });

  it('should be created', inject([HeadmasterService], (service: HeadmasterService) => {
    expect(service).toBeTruthy();
  }));
});
