// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDasa4CgHr4vIg7ZohyH0q6bLtNdDKRx2A",
  authDomain: "mern-real-estate-c4f86.firebaseapp.com",
  projectId: "mern-real-estate-c4f86",
  storageBucket: "mern-real-estate-c4f86.appspot.com",
  messagingSenderId: "603754090047",
  appId: "1:603754090047:web:85a03a8812f5fbea9eb28a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);