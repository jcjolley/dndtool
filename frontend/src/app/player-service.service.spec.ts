import { TestBed, inject } from '@angular/core/testing';

import { PlayerService } from './player-service.service';

describe('PlayerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
});
