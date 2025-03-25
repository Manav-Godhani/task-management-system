// src/Firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAquqETmItsA--fhVfOtN4GggCes45kFg",
  authDomain: "taskmanagement-699f1.firebaseapp.com",
  projectId: "taskmanagement-699f1",
  storageBucket: "taskmanagement-699f1.appspot.com",
  messagingSenderId: "25487228859",
  appId: "1:25487228859:web:769c5ba299eecafaa90e9e",
  measurementId: "G-S1T60818B1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
