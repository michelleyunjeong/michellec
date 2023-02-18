const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

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

$('.vision').addEventListener('click', () => {
  window.scrollTo(0,800);
});
$('.userresearch').addEventListener('click', () => {
  window.scrollTo(0,1600);
});
// inspirations 스크롤
$('.designdirection').addEventListener('click', () => {
  window.scrollTo(0,2900);
});

$('.info').addEventListener('click', () => {
  window.scrollTo(0,4500);
});

$('.ui').addEventListener('click', () => {
  window.scrollTo(0,6900);
});

$('.final').addEventListener('click', () => {
  window.scrollTo(0,9600);
});

ScrollTrigger.create({
  trigger: ".menuhover",
  pin: true,
  start: "-200 top",
  end: "+=8000"
});