import { useEffect, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/actions";
import { GAME_ON, SCORE, RESET, DB_SCORES } from "../actions/types";

import { db, auth } from "../firebase";

import {
  getDatabase,
  ref,
  set,
  push,
  child,
  update,
  get,
  serverTimestamp,
} from "firebase/database";
import { signOut } from "firebase/auth";

const Board = () => {
  const dispatch = useDispatch();

  const { activeID, time, score, gameOn } = useSelector((state) => state.game);

  const start = () => {
    dispatch(allActions.decrement(false, activeID));
    dispatch({ type: GAME_ON });
    dispatch({ type: RESET });
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
      submit();
    }
    // eslint-disable-next-line
  }, [time]);

  useEffect(() => {
    if (score >= 15) {
      dispatch(allActions.increaseSpeed(600));
    } else if (score >= 10) {
      dispatch(allActions.increaseSpeed(700));
    }
    // eslint-disable-next-lin
  }, [score]);

  const submit = () => {
    const newData = {
      score,
      timestamp: serverTimestamp(),
    };

    const newScoreKey = push(child(ref(db), "scores")).key;
    const updates = {};
    updates["/scores/" + newScoreKey] = newData;

    console.log("update", updates);
    update(ref(db), updates);
  };

  const sorted = (data) => {
    const keys = Object.keys(data);
    const arr = [];
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const s = data[k].score;
      const ts = data[k].timestamp;

      arr.push({
        score: s,
        timestamp: ts,
      });
    }

    return arr.sort((a, b) => (a.score < b.score ? 1 : -1));
  };

  const getData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "scores")).then((snapshot) => {
      const data = snapshot.val();

      dispatch({ type: DB_SCORES, payload: sorted(data) });
    });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.h1}>Time: {time}</h1>
      <h1 style={styles.h1}>Score: {score}</h1>
      <button onClick={start} className={`${gameOn ? "hide" : null} btn`}>
        Start
      </button>

      <button onClick={signOutUser} className={`${gameOn ? "hide" : null} btn`}>
        sign Out
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
    backgroundColor: "#FCBC5C",
    marginBottom: "1rem",
    border: "1px solid white",
    width: "15%",
    padding: "1rem",
    cursor: "pointer",
    borderRadius: "100px 100px",
    color: "#fff",
  },
};

export default Board;
