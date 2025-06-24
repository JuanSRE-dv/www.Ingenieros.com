import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDiKGQC8bmGtlG2unuYoHiii9pSp441V-k",
  authDomain: "login-3a580.firebaseapp.com",
  projectId: "login-3a580",
  storageBucket: "login-3a580.appspot.com",
  messagingSenderId: "71976587120",
  appId: "1:71976587120:web:1afdc24c1852ee843589b5",
  measurementId: "G-K7DV15JRW6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para obtener los datos del formulario
function getCredentials() {
  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;
  return { email, password };
}

// Registro
document.getElementById("registerBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const { email, password } = getCredentials();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registrado exitosamente: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("Error de registro: " + error.message);
    });
});

// Login
document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const { email, password } = getCredentials();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Sesión iniciada como: " + userCredential.user.email);
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Error al iniciar sesión: " + error.message);
    });
});
