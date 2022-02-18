import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ScoreState } from '../state/reducer';

@Component({
  selector: 'app-current-score',
  templateUrl: './current-score.component.html',
  styleUrls: ['./current-score.component.css']
})
export class CurrentScoreComponent implements OnInit {
  currentScore: number = 0;
  
  constructor(private store: Store<ScoreState>) { 
    // this.currentScore = this.store.select((state: ScoreState) => state.currentScore);
    this.store.subscribe(state => {
      this.currentScore = state.currentScore;
    });
}

  ngOnInit(): void {
  }

}
