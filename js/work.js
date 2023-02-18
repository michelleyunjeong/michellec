
const $ = (selector) => document.querySelector(selector);

// function password() {
//   let pass = window.prompt('type password here');
//   if (pass=="0726") {location.href="font.html";}
//   else {alert("password is incorrect");}
// }

$('.hamburger').addEventListener('click', () => {
  $('.hamburger').classList.toggle('on');
  $('.menupage').classList.toggle('on');
});

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");
