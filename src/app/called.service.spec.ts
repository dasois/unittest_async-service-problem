import { TestBed, inject } from '@angular/core/testing';

import { CalledService } from './called.service';

describe('CalledService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalledService]
    });
  });

  it('should be created', inject([CalledService], (service: CalledService) => {
    expect(service).toBeTruthy();
  }));
});
