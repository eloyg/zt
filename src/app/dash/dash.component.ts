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
  gameDuration = 30; // in secs.
  gameIsRunning = true; // false if game has ended.
  actionName = "Start game";
  // 6 nodos en donde en cada uno reservo una función que aleatoriamente entre un valor
  // entre 1 y 3, que luego se utiliza para la función de vida del mole.

  // por otro lado tenemos el tiempo de la game.

  constructor() { }

  buildMoles() {
    for(let i=0; i< this.maxMoles; i++ )
      this.activeMoles.push(new Mole(i));
  }

  startMatch() {
    this.gameIsRunning = true;
    this.setMatchClock();
  }

  endMatch() {
    this.gameIsRunning = false;      
    this.actionName = "Try again";
  }

  setMatchClock() {
    this.startMatch();
    timer(this.gameDuration * 1000)
    .subscribe(() => this.endMatch());
  }
}
