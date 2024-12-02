// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcmF1_SQZrdY1SyyKizlOGCV8LryqG8vs",
  authDomain: "my-profile-40a6b.firebaseapp.com",
  projectId: "my-profile-40a6b",
  storageBucket: "my-profile-40a6b.firebasestorage.app",
  messagingSenderId: "264334203770",
  appId: "1:264334203770:web:77485581800628f8e814c3",
  measurementId: "G-J25Z6Z50P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()
const analytics = getAnalytics(app);