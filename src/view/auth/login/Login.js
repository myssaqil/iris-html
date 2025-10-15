const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@gmail.com" && password === "12345") {
    message.style.color = "#8ef58e";
    message.textContent = "Login berhasil! Mengalihkan...";
    setTimeout(() => {
      window.location.href = "https://dev.iriseducation.id/#/auth/login";
    }, 1500);
  } else {
    message.style.color = "#ffbaba";
    message.textContent = "Email atau password salah!";
  }
});

function goBack() {
  window.location.href = "https://dev.iriseducation.id/";
}