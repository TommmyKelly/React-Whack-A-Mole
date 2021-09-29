import { SCORE, DECREMENT, ACTIVE_ID, GAME_ON, RESET } from "../actions/types";

const initialState = {
  time: 60,
  score: 0,
  activeID: 0,
  gameOn: false,
};

const gamePlay = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        time: state.time - 1,
      };
    case ACTIVE_ID:
      return {
        ...state,
        activeID: action.payload,
      };
    case SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case GAME_ON: {
      return {
        ...state,
        gameOn: !state.gameOn,
        activeID: 0,
      };
    }
    case RESET:
      return {
        ...state,
        time: 60,
        score: 0,
      };
    default:
      return state;
  }
};

export default gamePlay;
