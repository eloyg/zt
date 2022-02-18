import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Mole } from '../model/mole.model';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  maxMoles = 6; // game has 6 moles in total
  activeMoles: Mole[] = []; // size changes randomly
  gameDuration = 10; // in secs.
  gameRunning = false; // false if game has ended.
  actionName = "Start game";

  constructor() { 
  }

  createMoles() {
    for(let i=0; i< this.maxMoles; i++ ) {
      this.activeMoles.push(new Mole(i));
    }
  }
  
  startMatch() {
    this.createMoles();
    this.gameRunning = true;
    this.setMatchClock();
  }

  endMatch() {
    this.gameRunning = false;      
    this.actionName = "Try again";
  }

  setMatchClock() {
    timer(this.gameDuration * 1000)
    .subscribe(() => this.endMatch());
  }
}
