import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { Mole } from '../model/mole.model';
import { setHighestScore } from '../state/actions';
import { ScoreState } from '../state/reducer';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  maxMoles = 6; // game has 6 moles in total
  activeMoles: Mole[] = [];
  gameDuration = 10; // in secs.
  gameRunning = false; // false if game has ended.
  actionName = "Start game";

  constructor(private store: Store<ScoreState>) { 
  }

  ngOnInit() {
  }

  createMoles() {
    this.activeMoles = [];
    for(let i=0; i< this.maxMoles; i++ ) {
      this.activeMoles.push(new Mole(i));
    }
  }
  
  startMatch() {
    this.createMoles();
    this.gameRunning = true;
    this.setMatchClock();
  }

  processHighestScore() {
    this.store.dispatch(setHighestScore());
  }
  
  endMatch() {
    this.gameRunning = false;      
    this.actionName = "Try again";
    this.processHighestScore();
  }

  setMatchClock() {
    timer(this.gameDuration * 1000)
    .subscribe(() => this.endMatch());
  }
}
