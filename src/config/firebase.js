// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyANYJmv-TUHBDO5-i7RkOERjWSIIHNKSmA",
  authDomain: "suggestion-box-4d492.firebaseapp.com",
  projectId: "suggestion-box-4d492",
  storageBucket: "suggestion-box-4d492.firebasestorage.app",
  messagingSenderId: "858320343113",
  appId: "1:858320343113:web:a5117aa17c87f666bbaf98"
};

// Initialize Firebase
const app = initializeApp(firebase);
export const db = getFirestore(app);
