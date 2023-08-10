import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAbo4GLhqgZQ6pjE4ZIA6Np7psFXDp10PY",
    authDomain: "whatsapp-58ee8.firebaseapp.com",
    projectId: "whatsapp-58ee8",
    storageBucket: "whatsapp-58ee8.appspot.com",
    messagingSenderId: "242070731885",
    appId: "1:242070731885:web:0db0d6684f1bdb364ed364",
    measurementId: "G-4HQNZHTXJE"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);