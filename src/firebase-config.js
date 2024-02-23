// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7GFa7NrhtbDIWk8ao9XcBMqMBQLQDPGk",
  authDomain: "react-library-crud.firebaseapp.com",
  projectId: "react-library-crud",
  storageBucket: "react-library-crud.appspot.com",
  messagingSenderId: "389171728723",
  appId: "1:389171728723:web:864e61a73f10ef1b7811a6",
  measurementId: "G-XJREMJ57FS",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

export const db = getFirestore(app)
