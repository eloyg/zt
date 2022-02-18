import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ScoreState } from '../state/reducer';

@Component({
  selector: 'app-highest-scrore',
  templateUrl: './highest-scrore.component.html',
  styleUrls: ['./highest-scrore.component.css']
})
export class HighestScroreComponent implements OnInit {

  score: number = 0;
  constructor(private store: Store<ScoreState>) {
    this.store.subscribe((state: any) => {
       this.score = state.score.highestScore;
    });
  }

  ngOnInit(): void {
    
  }

}
