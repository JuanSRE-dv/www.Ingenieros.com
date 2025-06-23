// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDiKGQC8bmGtlG2unuYoHiii9pSp441V-k",
    authDomain: "login-3a580.firebaseapp.com",
    projectId: "login-3a580",
    storageBucket: "login-3a580.firebasestorage.app",
    messagingSenderId: "71976587120",
    appId: "1:71976587120:web:7f1d89554d7641003589b5",
    measurementId: "G-Y0E1TM9PDN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
