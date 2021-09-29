import { TIME, SCORE, DECREMENT, ACTIVE_ID } from "../actions/types";

const initialState = {
  time: 60,
  score: 0,
  activeID: 0,
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
    default:
      return state;
  }
};

export default gamePlay;
