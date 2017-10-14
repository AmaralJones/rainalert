import { TestBed, inject } from '@angular/core/testing';

import { GpsserviceService } from './gpsservice.service';

describe('GpsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpsserviceService]
    });
  });

  it('should be created', inject([GpsserviceService], (service: GpsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
