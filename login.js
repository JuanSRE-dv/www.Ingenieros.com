// Importar funciones necesarias
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuración de Firebase (misma que usaste para registrar)
const firebaseConfig = {
  apiKey: "AIzaSyDiKGQC8bmGtlG2unuYoHiii9pSp441V-k",
  authDomain: "login-3a580.firebaseapp.com",
  projectId: "login-3a580",
  storageBucket: "login-3a580.appspot.com",
  messagingSenderId: "71976587120",
  appId: "1:71976587120:web:1afdc24c1852ee843589b5",
  measurementId: "G-K7DV15JRW6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manejar el login
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Inicio de sesión exitoso: " + user.email);
      // Aquí podrías redirigir a otra página:
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
