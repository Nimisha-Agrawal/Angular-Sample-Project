import { TestBed } from '@angular/core/testing';

import { AlwaysAuthChildrenuardrdService } from './always-auth-childrenuardrd.service';

describe('AlwaysAuthChildrenuardrdService', () => {
  let service: AlwaysAuthChildrenuardrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlwaysAuthChildrenuardrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
