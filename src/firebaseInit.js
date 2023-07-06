// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5EahUiqrNQF70hDI8MH-7wuECKvs1sr8",
    authDomain: "chatgpt-7a122.firebaseapp.com",
    projectId: "chatgpt-7a122",
    storageBucket: "chatgpt-7a122.appspot.com",
    messagingSenderId: "347720165724",
    appId: "1:347720165724:web:a9b2cd693832366b943999",
    measurementId: "G-WVP03ZKEPM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firebaseAnalytics = getAnalytics(firebaseApp);
// // Initialize Cloud Firestore and get a reference to the service
export const firebaseDB = getFirestore(firebaseApp);
