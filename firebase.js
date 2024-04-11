// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD48EtWSnLKNBP99-yYw9SY6PyiPaceefs",
  authDomain: "siddhi-enterprise-5a821.firebaseapp.com",
  projectId: "siddhi-enterprise-5a821",
  storageBucket: "siddhi-enterprise-5a821.appspot.com",
  messagingSenderId: "670943795581",
  appId: "1:670943795581:web:1bf5818c453d0ab455d414",
  measurementId: "G-9CJ5X0E7EY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
