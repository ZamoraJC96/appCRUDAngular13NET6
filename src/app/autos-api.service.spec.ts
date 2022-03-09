import { TestBed } from '@angular/core/testing';

import { AutosApiService } from './autos-api.service';

describe('AutosApiService', () => {
  let service: AutosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
