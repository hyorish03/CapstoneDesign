import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyAAoKl-yLRwE91h7r_4EeGNfbM4wu5vfwo",
    authDomain: "react-firebase-app-2711f.firebaseapp.com",
    projectId: "react-firebase-app-2711f",
    storageBucket: "react-firebase-app-2711f.appspot.com",
    messagingSenderId: "688798790348",
    appId: "1:688798790348:web:4314ef0c3ba5a875bb8869",
    measurementId: "G-FP18NW9CW3"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();