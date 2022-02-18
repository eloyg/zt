import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import * as ScoreActions from './actions';

export interface ScoreState {
  highestScore: number;
  currentScore: number;
}

export const initialState: ScoreState = {
  highestScore: 0,
  currentScore: 0,
};

export const scoreReducer = createReducer(
  initialState,
  on(ScoreActions.setHighestScore, (state, {}) => ({
    ...state,
    highestScore:
      state.currentScore > state.highestScore
        ? state.currentScore
        : state.highestScore
  })),
  on(ScoreActions.updateCurrentScore, (state, { scoreVariation }) => ({
    ...state,
    currentScore: state.currentScore + scoreVariation,
  })),
  on(ScoreActions.resetCurrentScore, (state, { }) => ({
    ...state,
    currentScore: 0,
  }))
);
