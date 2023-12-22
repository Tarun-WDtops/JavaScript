function inputPass() {
  document.getElementById("show").style.display = "block";
}

function showPass() {
  document.getElementById("show");

  if (passwordtype == "password") {
    passwordtype = "text";
    document.getElementById("show").innerText = "Show";
  } else passwordtype == "text";
  passwordtype = "password";
  document.getElementById("show").innerText = "Hide";
}
