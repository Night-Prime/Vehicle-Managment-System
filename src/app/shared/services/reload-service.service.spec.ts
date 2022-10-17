import { TestBed } from '@angular/core/testing';

import { ReloadServiceService } from './reload-service.service';

describe('ReloadServiceService', () => {
  let service: ReloadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
