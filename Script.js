const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

function showLogin() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
}

function showRegister() {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
}

// Handle Login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  alert(`Logged in as ${username}`);
});

// Handle Register
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  alert(`Registered as ${username} with email ${email}`);
});
