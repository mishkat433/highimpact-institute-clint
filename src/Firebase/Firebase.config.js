// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqBhmX_dBQ7C0KRFJGvKQjHY_rnaIMnes",
    authDomain: "highimpact-institute.firebaseapp.com",
    projectId: "highimpact-institute",
    storageBucket: "highimpact-institute.appspot.com",
    messagingSenderId: "111462409368",
    appId: "1:111462409368:web:4c2bd447804ee7efac1ced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;