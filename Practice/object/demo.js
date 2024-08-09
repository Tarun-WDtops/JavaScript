const address = {
  id: 1,
  fname: "Tarun",
  lname: "Parmar",
  telephone: 9694844034,
  street: ["Jetawara", "Mandar", "Sorda"],
  City: "Ahmedabad",
  state: "Rajasthan",
  country: " India",
  zipcode: 307513,
  getFullname: function () {
    return address.fname + " " + address.lname;
  },
};
function getAddressdata() {
  // console.log("id-->", address.fname);
  // console.log("id-->", address.lname);
  // console.log("id-->", address.telephone);
  // console.log("id-->", address.street);
  // console.log("id-->", address.City);
  // console.log("id-->", address.state);
  // console.log("id-->", address.country);
}
getAddressdata();
// address.fname = "shankar";
// console.log(address);
// console.log(address.street[2]);
// console.log(address.fname);
// console.log(address.getFullname());

var a = 10;
let b = "Tarun";
var c = null;
var d = undefined;
function reAssign() {
  let b = "this";
  console.log(b);
}
console.log(b);
