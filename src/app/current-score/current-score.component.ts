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
  currentScore: Observable<number>;
  
  constructor(private store: Store<ScoreState>) { 
    this.currentScore = this.store.select((state: ScoreState) => state.currentScore);
}

  ngOnInit(): void {
  }

}
