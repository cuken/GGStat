/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardGame } from './board-game';
import { BoardGameService } from './board-game.service';

describe('BoardGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardGameService]
    });
  });

  describe('#getAllBoardGames()', () => {

    it('should return an empty array by default',
      inject([BoardGameService], (service: BoardGameService) => {
        expect(service.getAllBoardGames()).toEqual([]);
      }));

    it('should return all BoardGames', inject([BoardGameService], (service: BoardGameService) => {
      let bg1 = new BoardGame({ title: 'BoardGame1', minNumPlayers: 10, maxNumPlayers: 11, averageGameTime: 30 });
      let bg2 = new BoardGame({ title: 'BoardGame2', bggLink: 'http://cuken.com', picture: '/smile.png', lastPlayed: Date.now() });
      service.addBoardGame(bg1);
      service.addBoardGame(bg2);
      expect(service.getAllBoardGames()).toEqual([bg1, bg2]);
    }));
  });

  describe('#save(boardGame)', () => {

    it('should automatically assign an incrimenting id because we faked the db',
      inject([BoardGameService], (service: BoardGameService) => {
        let bg1 = new BoardGame({ title: 'BoardGame1', minNumPlayers: 10, maxNumPlayers: 11, averageGameTime: 30 });
        let bg2 = new BoardGame({ title: 'BoardGame2', bggLink: 'http://cuken.com', picture: '/smile.png', lastPlayed: Date.now() });
        service.addBoardGame(bg1);
        service.addBoardGame(bg2);
        expect(service.getBoardGameById(1)).toEqual(bg1);
        expect(service.getBoardGameById(2)).toEqual(bg2);
      }));

    describe('#deleteBoardGameById(id)', () => {

      it('should remove boarGame from the corresponding id',
        inject([BoardGameService], (service: BoardGameService) => {
          let bg1 = new BoardGame({ title: 'BoardGame1', minNumPlayers: 10, maxNumPlayers: 11, averageGameTime: 30 });
          let bg2 = new BoardGame({ title: 'BoardGame2', bggLink: 'http://cuken.com', picture: '/smile.png', lastPlayed: Date.now() });
          service.addBoardGame(bg1);
          service.addBoardGame(bg2);
          expect(service.getAllBoardGames()).toEqual([bg1, bg2]);
          service.deleteBoardGameById(1);
          expect(service.getAllBoardGames()).toEqual([bg2]);
          service.deleteBoardGameById(2);
          expect(service.getAllBoardGames()).toEqual([]);
        }));

      it('should not remove anything if passed an invalid id',
        inject([BoardGameService], (service: BoardGameService) => {
          let bg1 = new BoardGame({ title: 'BoardGame1', minNumPlayers: 10, maxNumPlayers: 11, averageGameTime: 30 });
          let bg2 = new BoardGame({ title: 'BoardGame2', bggLink: 'http://cuken.com', picture: '/smile.png', lastPlayed: Date.now() });
          service.addBoardGame(bg1);
          service.addBoardGame(bg2);
          expect(service.getAllBoardGames()).toEqual([bg1, bg2]);
          service.deleteBoardGameById(3);
          expect(service.getAllBoardGames()).toEqual([bg1, bg2]);
        }));
    });

    describe('#updateBoardGameById(id, values)', () => {
      
      it('should return boardgame with corresponding id and update it`s data',
      inject([BoardGameService], (service: BoardGameService) => {
        let bg = new BoardGame({title: 'Change Me', minNumPlayers: 5});
        service.addBoardGame(bg);
        let updatedBg = service.updateBoardGameByID(1, {
          title: 'Changed :)'
        });
        expect(updatedBg.title).toEqual('Changed :)');
      }));

      it('should return null with incorrect id supplied',
      inject([BoardGameService], (service: BoardGameService) => {
        let bg = new BoardGame({title: 'Change Me', minNumPlayers: 5});
        service.addBoardGame(bg);
        let updatedBg = service.updateBoardGameByID(2, {
          title: 'Changed :)'
        });
        expect(updatedBg).toEqual(null);
      }));      
    });
  });
});