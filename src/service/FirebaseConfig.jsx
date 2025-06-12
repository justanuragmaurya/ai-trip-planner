// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-trip-planner-4f0c5.firebaseapp.com",
  projectId: "ai-trip-planner-4f0c5",
  storageBucket: "ai-trip-planner-4f0c5.appspot.com",
  messagingSenderId: "846305870709",
  appId: "1:846305870709:web:aa20300d095668513b493c",
  measurementId: "G-DP98GGT93Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
// const analytics = getAnalytics(app);