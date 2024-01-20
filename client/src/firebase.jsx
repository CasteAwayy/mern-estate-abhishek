// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDde53-Fh6e6tCaJD1hKjL9K2pONfuyFOM",
  authDomain: "mern-estate-abhishek.firebaseapp.com",
  projectId: "mern-estate-abhishek",
  storageBucket: "mern-estate-abhishek.appspot.com",
  messagingSenderId: "709078964094",
  appId: "1:709078964094:web:748778f0b5d6f50ec9c52f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);