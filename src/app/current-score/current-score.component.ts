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
    this.store.subscribe((state: any) => {
      this.currentScore = state.score.currentScore;
    });
}

  ngOnInit(): void {
  }

}
