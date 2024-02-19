let a = document.getElementById("first");
let b = document.getElementById("second");

function handleCheckDate() {
  let c = new Date(a.value);
  let d = c.getDate();
  console.log(d);
  document.getElementById("result").value = d;
}

function handleCheckMonth() {
  let c = new Date(a.value);
  let d = c.getMonth() + 1;
  console.log(d);
  document.getElementById("result").value = d;
}

function handleCheckYear() {
  let c = new Date(a.value);
  let d = c.getFullYear();
  console.log(d);
  document.getElementById("result").value = d;
}

function handleInterval() {
  let c = new Date(a.value);
  let d = parseInt(b.value) - parseInt(a.value);
  console.log(d);
  document.write(d).getElementById("result").value;
}
// function handleCheck() {
//   console.log(a);
//   console.log(a.value);
//   console.log(typeof a.value);
//   console.log(parseInt(a.value));
//   console.log(typeof parseInt(a.value));
//   console.log(parseInt(b.value) - parseInt(a.value));
// }
