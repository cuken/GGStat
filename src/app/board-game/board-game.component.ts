import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { BoardGame } from '../board-game';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {
 // public addBGForm: FormGroup;
 // public submitted: boolean;
 // public events: any[] = [];

  title: string;
  bggLink: string;


  constructor() { }

  ngOnInit() {
  }

  //save(model: BoardGame, isValid: boolean){
    //this.submitted = true;

    //Call the API to save out the new board game
    //console.log(model, isValid);
  //}

}
