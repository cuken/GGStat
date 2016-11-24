/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardGameService } from './board-game.service';
import { BoardGame } from './board-game';

describe('BoardGameService', () => {
  beforeEach(() => [BoardGameService]);

  describe('#getAllBoardGames()', () => {

    it('should return an empty array by default', inject([BoardGameService], (service: BoardGameService) => {
      expect(service.getAllBoardGames()).toEqual([]);
    }));

    it('shoudl return all BoardGames', inject([BoardGameService], (service: BoardGameService) => {
      let bg1 = new BoardGame({title: "BoardGame1", })
    }))

  });
});