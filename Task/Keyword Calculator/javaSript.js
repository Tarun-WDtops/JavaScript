let result = document.getElementById("result-input");

function Value(a) {
  result.value += a.innerText;
}
function Function(b) {
  result.value += b.innerText;
}

function Del() {
  result.value = result.value.slice(0, -1);
}

// function clearResult() {
//   document.getElementById("result").value = "";
// }

function totalResult() {
  result.value = eval(result.value);
}
