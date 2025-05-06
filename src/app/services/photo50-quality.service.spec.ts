import { TestBed } from '@angular/core/testing';

import { Photo50QualityService } from './photo50-quality.service';

describe('Photo50QualityService', () => {
  let service: Photo50QualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Photo50QualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
