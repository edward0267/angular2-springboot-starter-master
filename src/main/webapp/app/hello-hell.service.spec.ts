import { TestBed, inject } from '@angular/core/testing';

import { HelloHellService } from './hello-hell/hello-hell.service.ts';

describe('HelloHellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloHellService]
    });
  });

  it('should ...', inject([HelloHellService], (service: HelloHellService) => {
    expect(service).toBeTruthy();
  }));
});
