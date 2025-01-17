// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDZHw7dLV7Js9wSfbIUM50K3xsLXSl3rk",
  authDomain: "personalportfolio-d2357.firebaseapp.com",
  projectId: "personalportfolio-d2357",
  storageBucket: "personalportfolio-d2357.firebasestorage.app",
  messagingSenderId: "1095396595439",
  appId: "1:1095396595439:web:9cd00a102d064cc8102d1a",
  measurementId: "G-LSJWJJGG4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };