import { TestBed, inject } from '@angular/core/testing';

import { RainserviceService } from './rainservice.service';

describe('RainserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RainserviceService]
    });
  });

  it('should be created', inject([RainserviceService], (service: RainserviceService) => {
    expect(service).toBeTruthy();
  }));
});
