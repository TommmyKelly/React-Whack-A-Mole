import { useEffect, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/actions";
import {
  GAME_ON,
  SCORE,
  RESET,
  SHOW_MODAL,
  SHOW_POP_UP,
} from "../actions/types";
import { db, auth } from "../firebase";
import Modal from "./Modal";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { signOut } from "firebase/auth";
import molespeech from "../images/molespeech.png";

const Board = () => {
  let timeOutPopUP;

  const dispatch = useDispatch();

  const { activeID, time, score, gameOn, showModal, user, showPopUp } =
    useSelector((state) => state.game);

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
    if (e.target.className === "box false" && gameOn) {
      if (!showPopUp) {
        const audio = new Audio("/laugh.mp3");
        audio.play();
        dispatch({ type: SHOW_POP_UP });
        timeOutPopUP = setTimeout(() => {
          dispatch({ type: SHOW_POP_UP });
        }, 600);
      }
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

  const submit = async () => {
    const docRef = await addDoc(collection(db, "leaderBoard"), {
      score,
      timestamp: serverTimestamp(),
      user: user.name,
      userImg: user.img,
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
      {showModal && <Modal />}
      <img src={user?.img} />
      <h1>{user?.name}</h1>
      <h1 style={styles.h1}>Time: {time}</h1>
      <h1 style={styles.h1}>Score: {score}</h1>
      <button onClick={start} className={`${gameOn ? "hide" : null} btn`}>
        Start
      </button>

      <button onClick={signOutUser} className={`${gameOn ? "hide" : null} btn`}>
        sign Out
      </button>

      <button
        onClick={() => dispatch({ type: SHOW_MODAL })}
        className={`${gameOn ? "hide" : null} btn`}
      >
        LeaderBoard
      </button>

      <div style={styles.container}>
        <div
          className={`box ${activeID === 1 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 2 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 3 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 4 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 5 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 6 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 7 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 8 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 9 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 10 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 11 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
        <div
          className={`box ${activeID === 12 && "active"}`}
          onClick={(e) => handleClick(e)}
        ></div>
      </div>
      <img
        style={!showPopUp ? styles.popup : styles.showPopUp}
        src={molespeech}
        alt=''
      />
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
  popup: {
    height: 300,
    width: 200,
    position: "absolute",
    bottom: 0,
    left: 0,
    transition: "transform 1s",
    transform: `translateY(100%)`,
  },
  showPopUp: {
    height: 300,
    width: 200,
    position: "absolute",
    bottom: 0,
    left: 0,
    transition: "transform 1s",
    // transform: `translateY(100%)`,
  },
};

export default Board;
