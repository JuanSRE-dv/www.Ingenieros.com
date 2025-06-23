// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmEXLfUSDwJp2MXdp5frDko_UEs_QlJvM",
  authDomain: "website-autogestionado-prod.firebaseapp.com",
  projectId: "website-autogestionado-prod",
  storageBucket: "website-autogestionado-prod.firebasestorage.app",
  messagingSenderId: "117827464868",
  appId: "1:117827464868:web:7ec0d0260ee5597f7c0031",
  measurementId: "G-2W0FR1BTB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
