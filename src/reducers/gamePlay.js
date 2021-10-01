import {
  SCORE,
  DECREMENT,
  ACTIVE_ID,
  GAME_ON,
  RESET,
  DB_SCORES,
  SHOW_MODAL,
  USER,
} from "../actions/types";

const initialState = {
  time: 5,
  score: 0,
  activeID: 0,
  gameOn: false,
  db_scores: [],
  showModal: false,
  user: {},
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
    case DB_SCORES:
      return {
        ...state,
        db_scores: action.payload,
      };
    case RESET:
      return {
        ...state,
        time: 5,
        score: 0,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default gamePlay;
