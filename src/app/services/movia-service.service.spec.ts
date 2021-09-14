import { TestBed } from '@angular/core/testing';

import { MoviaServiceService } from './movia-service.service';

describe('MoviaServiceService', () => {
  let service: MoviaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
