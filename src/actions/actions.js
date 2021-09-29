import { TIME, SCORE, DECREMENT, ACTIVE_ID } from "../actions/types";
import store from "../store";

let timeInterval;

const getRandomID = (id) => {
  console.log("Start");
  const randomNum = Math.floor(Math.random() * 12 + 1);

  if (randomNum === id) {
    getRandomID(id);
  }

  return randomNum;
};

const decrement =
  (stop = false) =>
  async (dispatch) => {
    if (!stop) {
      timeInterval = setInterval(() => {
        const state = store.getState();

        dispatch({ type: DECREMENT });
        dispatch({
          type: ACTIVE_ID,
          payload: getRandomID(state.game.activeID),
        });
      }, 1000);
    } else {
      clearInterval(timeInterval);
    }
  };

const allActions = {
  decrement,
};

export default allActions;
