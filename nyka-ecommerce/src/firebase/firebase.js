// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPrKBrrWWzm2MORczh-y_T_mGaqTzeIQY",
  authDomain: "nyka-ecommerce.firebaseapp.com",
  projectId: "nyka-ecommerce",
  storageBucket: "nyka-ecommerce.appspot.com",
  messagingSenderId: "258414457581",
  appId: "1:258414457581:web:facbdf277ea39f43fbd2e4",
  measurementId: "G-3T6RCF0DJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);