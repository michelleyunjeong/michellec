const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

$('.hamburger').addEventListener('click', () => {
  $('.hamburger').classList.toggle('on');
  $('.menupage').classList.toggle('on');
});

let menuLi = $('.menu').querySelectorAll('li');
menuLi.forEach((li,index) => {
  li.addEventListener('click', () => {
    menuLi.forEach((li,index) => {
      li.classList.remove('on');
    });
    menuLi[index].classList.add('on');
  });
});


window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

});

let menulistLi = $('.menumenu').querySelectorAll('li');
menulistLi.forEach((li,index) => {
  li.addEventListener('click', () => {
    $('.menuhover').classList.remove('on');
  });
});

$('.intro').addEventListener('click', () => {
  window.scrollTo(0,0);
});

$('.videovideo').addEventListener('click', () => {
  window.scrollTo(0,2000);
});

ScrollTrigger.create({
  trigger: ".menuhover",
  pin: true,
  start: "-200 top",
  end: "+=3000"
});