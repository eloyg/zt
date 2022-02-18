import { Component, OnInit } from '@angular/core';
import { interval, pipe, timer } from 'rxjs';
import { takeUntil, timeout } from 'rxjs/operators'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  maxMoles = 6; // game has 6 moles in total
  activeMoles = []; // size changes randomly
  gameDuration = 30; // in secs.
  gameIsRunning = true; // false if game has ended.
  elapsedTime = 0; // will be 30 after 30 secs counted from user click
  timeout = false;
  actionName = "Start game";
  // 6 nodos en donde en cada uno reservo una función que aleatoriamente entre un valor
  // entre 1 y 3, que luego se utiliza para la función de vida del mole.

  // por otro lado tenemos el tiempo de la game.

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.gameIsRunning = false;
    }, this.gameDuration);
  }

  startMatch() {
    this.timeout = false;
    this.gameIsRunning = true;
    this.setMatchClock();
  }

  endMatch() {
    this.timeout = true;
    this.gameIsRunning = false;      
    this.actionName = "Try again";
  }

  setMatchClock() {
    this.startMatch();
    const result = timer(this.gameDuration * 1000)
    .subscribe(() => this.endMatch());
  }
}
