import { TestBed } from '@angular/core/testing';

import { AlwaysAuthGuardService } from './always-auth-guard.service';

describe('AlwaysAuthGuardService', () => {
  let service: AlwaysAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlwaysAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
