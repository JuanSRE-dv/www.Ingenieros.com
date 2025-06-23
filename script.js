function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => window.location.href = "home.html")
    .catch(err => alert("Error: " + err.message));
}

function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => window.location.href = "home.html")
    .catch(err => alert("Error: " + err.message));
}

function logout() {
  firebase.auth().signOut().then(() => window.location.href = "index.html");
}

firebase.auth().onAuthStateChanged(user => {
  const welcome = document.getElementById("welcome");
  if (welcome && user) {
    welcome.innerText = `Bienvenido, ${user.email}`;
  }
});
