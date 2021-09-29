import { TIME, SCORE, DECREMENT, ACTIVE_ID } from "../actions/types";
import { useSelector } from "react-redux";

let timeInterval;

const getRandomID = () => {
  return Math.floor(Math.random() * 12 + 1);
};

const decrement =
  (stop = false) =>
  async (dispatch) => {
    console.log(stop);
    if (!stop) {
      timeInterval = setInterval(() => {
        dispatch({ type: DECREMENT });
        dispatch({ type: ACTIVE_ID, payload: getRandomID() });
      }, 1000);
    } else {
      clearInterval(timeInterval);
    }
  };

const allActions = {
  decrement,
};

export default allActions;
