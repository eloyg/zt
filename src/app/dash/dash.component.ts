import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  // 6 nodos en donde en cada uno reservo una función que aleatoriamente entre un valor
  // entre 1 y 3, que luego se utiliza para la función de vida del mole.

  // por otro lado tenemos el tiempo de la game.

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.gameIsRunning = false;
    }, this.gameDuration);

  }

  setClock() {
    this.elapsedTime = 0;
    const clockEmulator = interval(1000);
    clockEmulator
    .takeUntil(this.gameDuration * 1000) //in secs.)
    .subscribe((t: number) =>
      this.elapsedTime = this.elapsedTime + 1
    );
  }

  anotherTry() {

  }

  startGame() {

  }

}
