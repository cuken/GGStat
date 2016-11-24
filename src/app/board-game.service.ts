import { Injectable } from '@angular/core';
import { BoardGame } from './board-game';

@Injectable()
export class BoardGameService {

  lastId: number = 0;
  bgs: BoardGame[] = [];

  constructor() { }

  addBoardGame(boardGame: BoardGame): BoardGameService{
    if(!boardGame.id){
      boardGame.id = ++this.lastId;
    }
    this.bgs.push(boardGame);
    return this;
  }

  deleteBoardGameById(id: number): BoardGameService{
    this.bgs = this.bgs.filter(bgs => bgs.id !== id);
    return this;
  }

  updateBoardGameByID(id: number, values: Object = {}): BoardGame {
    let boardGame = this.getBoardGameById(id);
    if(!boardGame) {
      return null;
    }
    Object.assign(boardGame, values);
    return boardGame;
  }

  getAllBoardGames(): BoardGame[] {
    return this.bgs;
  }

  getBoardGameById(id: number): BoardGame{
    return this.bgs.filter(boardGame => boardGame.id === id).pop();
  }
}