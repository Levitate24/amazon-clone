import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4akXBG5VqNDWc63uwpF0e3FpkhsMdQwc",
  authDomain: "clone-f0f97.firebaseapp.com",
  projectId: "clone-f0f97",
  storageBucket: "clone-f0f97.appspot.com",
  messagingSenderId: "794972987939",
  appId: "1:794972987939:web:8fec7ae60aea9f71b6c796",
  measurementId: "G-B4KV38PLCE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
