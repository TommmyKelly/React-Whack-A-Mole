import { useState, useEffect } from "react";
import "../App.css";

const Board = () => {
  const [score, setScore] = useState(0);
  const [activeID, setActiveID] = useState(0);
  const [time, setTime] = useState(10);
  const [moleInterval, setMoleInterval] = useState(null);
  const [timeInterval, setTimeInterval] = useState(null);

  const start = () => {
    setScore(0);
    setTime(10);
    setMoleInterval(
      setInterval(() => {
        setActiveID(Math.floor(Math.random() * 12 + 1));
      }, 1000)
    );
    setTimeInterval(
      setInterval(() => {
        setTime((preTime) => preTime - 1);
      }, 1000)
    );
  };

  const handleClick = (e) => {
    if (e.target.className === "box active") {
      setScore(score + 1);
      e.target.classList.remove("active");
    }
  };

  const stopGame = () => {
    clearInterval(moleInterval);
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(moleInterval);
      clearInterval(timeInterval);
      setActiveID(0);
    }
  }, [time]);

  return (
    <div style={styles.main}>
      <h1>{time}</h1>
      <h1>{score}</h1>
      <button style={styles.start_button} onClick={start}>
        Start
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
