import { TestBed } from '@angular/core/testing';

import { ApiWizbiiService } from './api-wizbii.service';

describe('ApiWizbiiService', () => {
  let service: ApiWizbiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWizbiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
