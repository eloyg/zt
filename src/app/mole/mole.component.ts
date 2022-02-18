import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCurrentScore } from '../state/actions';
import { ScoreState } from '../state/reducer';

@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.css']
})
export class MoleComponent implements OnInit {
  @Input() active = false;

  constructor(private store: Store<ScoreState>) { }

  ngOnInit(): void {
  }

  doHit() {
    this.store.dispatch(updateCurrentScore({scoreVariation: this.active ? 1 : -1}));
  }

}
