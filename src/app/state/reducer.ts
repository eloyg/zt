import * as ScoreActions from './actions';

export interface ScoreState {
    highestScore: number;
    currentScore: number;
}

export const initialState =  {
    highestScore: 0,
    currentScore: 0
};

export function reducer(state = initialState, action: ScoreActions.Actions): ScoreState {
    switch (action.type) {

        case ScoreActions.SET_HIGHEST_SCORE: {
            return {
                ...state,
                highestScore: action.score;
            };
        };
        case ScoreActions.UPDATE_CURRENT_SCORE: {
            return {
                ...state,
                currentScore: state.currentScore + action.scoreVariation;
            };
        };
        default: {
            return state;
        }
    }


}
