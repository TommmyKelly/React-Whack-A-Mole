// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALnNzwp49-kF2fGtJQrTL7ZLPZ4x4TbqI",
  authDomain: "yt-demo-5b41f.firebaseapp.com",
  projectId: "yt-demo-5b41f",
  storageBucket: "yt-demo-5b41f.appspot.com",
  messagingSenderId: "519328294498",
  appId: "1:519328294498:web:ddf5cc08e81540e05d933b",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
