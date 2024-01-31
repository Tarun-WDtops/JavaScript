function inputPass() {
  document.getElementById("show").style.display = "block";
}

function showPass() {
  let a = document.getElementById("tarun");

  if (a.type === "password") {
    document.getElementById("tarun").innerText = "hide";
    a.type = "text";
  } else {
    document.getElementById("tarun").innerText = "show";
    a.type = "password";
  }
}
