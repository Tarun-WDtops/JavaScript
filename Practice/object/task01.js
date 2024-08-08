const myInfo = {
  id: 2,
  fname: "Tarun",
  lname: "Parmar",
  village: "Jetawara",
  block: "Reoder",
  district: "Sirohi",
  state: "Rajasthan",
  zipCode: 307513,
  telephone: 9694844034,
  favMovies: ["Gadar", "Salaar", "Animal"],
  salary: function () {
    return 25000;
  },
};
// console.log(myInfo);
// console.log(myInfo.salary());
// console.log(myInfo.favMovies[0]);
// console.log(myInfo.favMovies[1]);
// console.log(myInfo.favMovies[2]);

function setfname() {
  myInfo.fname = "Shankar";
}

function getfname() {
  console.log(myInfo.fname);
}

setfname();
getfname();

function setlname() {
  myInfo.lname = "Lal";
}

function getlname() {
  console.log(myInfo.lname);
}

setlname();
getlname();

function setblock() {
  myInfo.block = "Gandhinagar";
}

function getblock() {
  console.log(myInfo.block);
}

setblock();
getblock();

function setdistrict() {
  myInfo.district = "Banaskantha";
}

function getdistrict() {
  console.log(myInfo.district);
}

setdistrict();
getdistrict();

function setstate() {
  myInfo.state = "Gujrat";
}

function getstate() {
  console.log(myInfo.state);
}

setstate();
getstate();

function setzipCode() {
  myInfo.zipCode = 380004;
}

function getzipCode() {
  console.log(myInfo.zipCode);
}

setzipCode();
getzipCode();

function settelephone() {
  myInfo.telephone = 7690018234;
}

function gettelephone() {
  console.log(myInfo.telephone);
}

settelephone();
gettelephone();

function setfavMovies() {
  myInfo.favMovies = ["Hum", "Baadshah", "Jaal"];
}

function getfavMovies() {
  console.log(myInfo.favMovies);
}

setfavMovies();
getfavMovies();
