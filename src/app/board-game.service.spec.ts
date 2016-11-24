/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardGameService } from './board-game.service';

describe('BoardGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardGameService]
    });
  });

  it('should ...', inject([BoardGameService], (service: BoardGameService) => {
    expect(service).toBeTruthy();
  }));
});
