import { TestBed, inject } from '@angular/core/testing';

import { RemotesettingService } from './remotesetting.service';

describe('RemotesettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemotesettingService]
    });
  });

  it('should be created', inject([RemotesettingService], (service: RemotesettingService) => {
    expect(service).toBeTruthy();
  }));
});
