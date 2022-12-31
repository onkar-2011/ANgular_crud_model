import { TestBed } from '@angular/core/testing';

import { TabaleapiService } from './tabaleapi.service';

describe('TabaleapiService', () => {
  let service: TabaleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabaleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
