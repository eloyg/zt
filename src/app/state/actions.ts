export const SET_HIGHEST_SCORE = 'SET_HIGHEST_SCORE';
export const UPDATE_CURRENT_SCORE = 'SET_HIGHEST_SCORE';

export class SetHighestScoreAction {
    readonly type = SET_HIGHEST_SCORE;
    constructor(public score: number) {}
}

export class UpdateCurrentScoreAction {
    readonly type = UPDATE_CURRENT_SCORE;
    constructor(public scoreVariation: number) {}
}

export type Actions = SetHighestScoreAction | UpdateCurrentScoreAction; 