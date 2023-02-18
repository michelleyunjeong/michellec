const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

$('.hamburger').addEventListener('click', () => {
  $('.hamburger').classList.toggle('on');
  $('.menupage').classList.toggle('on');
});


window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

  if (scrollTop > 0) {
    $('.pic1').classList.add('on');
  }
  if (scrollTop > 400) {
    $('.pic2').classList.add('on');
  }

  if (scrollTop > 800) {
    $('.pic3').classList.add('on');
  }

  if (scrollTop > 1200) {
    $('.pic4').classList.add('on');
  }

  if (scrollTop > 1800) {
    $('.pic5').classList.add('on');
  }

  if (scrollTop > 2100) {
    $('.pic6').classList.add('on');
  }

  if (scrollTop > 2500) {
    $('.pic6').classList.add('on');
  }

  if (scrollTop > 2700) {
    $('.pic7').classList.add('on');
  }

  if (scrollTop > 2900) {
    $('.pic8').classList.add('on');
  }

  if (scrollTop > 3200) {
    $('.pic9').classList.add('on');
  }

  if (scrollTop < 10) {
    $('.pic9').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic8').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic7').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic6').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic5').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic4').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic3').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic2').classList.remove('on');
  }

  if (scrollTop < 10) {
    $('.pic1').classList.remove('on');
  }

});

  gsap.to('.fix01', {
          
    scrollTrigger: {
      trigger: ".trigger01",
      start: "top top",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  gsap.to('.fix02', {
          
    scrollTrigger: {
      trigger: ".trigger02",
      start: "top top",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  gsap.to('.michelleyun', {
          
    width: 300,
    y: -300,
    x: 800,
      scrollTrigger: {
      trigger: "#section02",
      start: "top top",
      end: '+=9300',
      scrub: true,
      }
  });

  gsap.to('.fix03', {
          
    scrollTrigger: {
      trigger: ".trigger03",
      start: "top top",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  gsap.to('.silhouette', {
          

    scale: 8,
    y: 50,
    x: 550,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.pictureofme', {
        
    opacity: 0,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.fix04', {
          
    scrollTrigger: {
      trigger: ".trigger04",
      start: "top top",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });