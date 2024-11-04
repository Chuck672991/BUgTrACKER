// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC19fBkT0TSsxkFPl9O0A5iSZxP8ygeruo",
  authDomain: "bug-tracker-a0f11.firebaseapp.com",
  projectId: "bug-tracker-a0f11",
  storageBucket: "bug-tracker-a0f11.firebasestorage.app",
  messagingSenderId: "10703009977",
  appId: "1:10703009977:web:ca324002cda1d861804368",
  measurementId: "G-SXHJY71JPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {db,auth}