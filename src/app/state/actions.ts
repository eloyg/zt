import { createAction, props } from '@ngrx/store';

export const setHighestScore = createAction('[Score] Highest Score');
export const updateCurrentScore = createAction('[Scoreboard Page] Current Score', props<{scoreVariation: number}>());
export const resetCurrentScore = createAction('[Score] ResetCurrent Score');