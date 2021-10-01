import "../App.css";
import { DB_SCORES, SHOW_MODAL } from "../actions/types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const Modal = () => {
  const dispatch = useDispatch();
  const { db_scores } = useSelector((state) => state.game);

  const getData = async () => {
    const messageRef = collection(db, "leaderBoard");
    const q = query(messageRef, orderBy("score", "desc"), limit(2));
    const queryData = await getDocs(q);
    const data = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
    });

    dispatch({ type: DB_SCORES, payload: data });
  };

  const closeModal = (e) => {
    e.target.className === "modal" && dispatch({ type: SHOW_MODAL });
  };

  useEffect(() => {
    // getData();
  }, []);
  return (
    <div
      style={styles.container}
      className='modal'
      onClick={(e) => closeModal(e)}
    >
      <div className='modal-content' style={styles.modalContent}>
        <button className='btn' onClick={() => dispatch({ type: SHOW_MODAL })}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingTop: 100,
  },
  modalContent: {
    width: "80%",
    padding: 20,
    margin: "auto",
    backgroundColor: "#fefefe",
    height: "70vh",
    overflow: "hidden",
    overflowY: "scroll",
  },
};

export default Modal;
