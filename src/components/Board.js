import { useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/actions";
import { GAME_ON, SCORE, RESET } from "../actions/types";
const Board = () => {
  const dispatch = useDispatch();

  const { activeID, time, score, gameOn } = useSelector((state) => state.game);

  const start = () => {
    dispatch(allActions.decrement(false, activeID));
    dispatch({ type: GAME_ON });
    dispatch({ type: RESET });
  };

  const reset = () => {
    dispatch(allActions.decrement(true));
  };

  const handleClick = (e) => {
    if (e.target.className === "box active") {
      dispatch({ type: SCORE });
      e.target.classList.remove("active");
    }
  };

  useEffect(() => {
    if (time === 0) {
      dispatch(allActions.decrement(true));
      dispatch({ type: GAME_ON });
    }
    // eslint-disable-next-line
  }, [time]);

  return (
    <div style={styles.main}>
      <h1>{time}</h1>
      <h1>{score}</h1>
      <button
        style={styles.start_button}
        onClick={start}
        className={gameOn ? "hide" : null}
      >
        Start
      </button>
      <button style={styles.start_button} onClick={reset}>
        Reset
      </button>

      <div style={styles.container}>
        <div
          id='1'
          className={`box ${activeID === 1 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='2'
          className={`box ${activeID === 2 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='3'
          className={`box ${activeID === 3 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='4'
          className={`box ${activeID === 4 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='5'
          className={`box ${activeID === 5 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='6'
          className={`box ${activeID === 6 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='7'
          className={`box ${activeID === 7 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='8'
          className={`box ${activeID === 8 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='9'
          className={`box ${activeID === 9 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='10'
          className={`box ${activeID === 10 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='11'
          className={`box ${activeID === 11 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          id='12'
          className={`box ${activeID === 12 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    width: 500,
    height: 400,
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
  },
  start_button: {
    marginBottom: 20,
  },
};

export default Board;
