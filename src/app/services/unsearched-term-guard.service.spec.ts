import { TestBed } from '@angular/core/testing';

import { UnsearchedTermGuardService } from './unsearched-term-guard.service';

describe('UnsearchedTermGuardService', () => {
  let service: UnsearchedTermGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsearchedTermGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
