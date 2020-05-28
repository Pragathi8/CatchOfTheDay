import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxJGzyk7CXHU6PMKkR2-nKJFpW3rF0HAw",
  authDomain: "catch-of-the-day-08.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-08.firebaseio.com"
  // projectId: "catch-of-the-day-08",
  // storageBucket: "catch-of-the-day-08.appspot.com",
  // messagingSenderId: "741711482631",
  // appId: "1:741711482631:web:a246fd6050671411177fa2",
  // measurementId: "G-GTZ7B1ZP6Q"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
