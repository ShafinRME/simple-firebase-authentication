// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPEfv_53LJNuriZQq7NnExLKpp9zkcZc8",
    authDomain: "simple-firebase-authenti-f243f.firebaseapp.com",
    projectId: "simple-firebase-authenti-f243f",
    storageBucket: "simple-firebase-authenti-f243f.appspot.com",
    messagingSenderId: "627217907350",
    appId: "1:627217907350:web:f68add49ffa44142964cb7",
    measurementId: "G-ZVLC6DFZZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;