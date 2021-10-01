// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaynBnVOWZF96_BBIzLnZIqn1WQUGuKAw",
  authDomain: "whack-a-mole-e7087.firebaseapp.com",
  databaseURL: "https://whack-a-mole-e7087.firebaseio.com",
  projectId: "whack-a-mole-e7087",
  storageBucket: "whack-a-mole-e7087.appspot.com",
  messagingSenderId: "438743682474",
  appId: "1:438743682474:web:7d2e3fd86fd172aec06fd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
