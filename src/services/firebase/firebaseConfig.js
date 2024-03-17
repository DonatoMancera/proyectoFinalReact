// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoD7IaDmfzWXYpzbRfOhSLMS7YDW79Oh8",
    authDomain: "reactfirstproyect-5ed11.firebaseapp.com",
    projectId: "reactfirstproyect-5ed11",
    storageBucket: "reactfirstproyect-5ed11.appspot.com",
    messagingSenderId: "895264146773",
    appId: "1:895264146773:web:a248267dabeb1c5dc09bdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);