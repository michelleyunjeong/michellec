const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

// menu
$('.hamburger').addEventListener('click', () => {
  $('.hamburger').classList.toggle('on');
  $('.menupage').classList.toggle('on');
});

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

  if (scrollTop > 4200 && scrollTop < 8600) {
    $('#header').classList.add('dark');
  } else if (scrollTop > 9300 && scrollTop < 12350) {
    $('#header').classList.add('dark');
  } else if (scrollTop > 13218) {
    $('#header').classList.add('dark');
  } else {
    $('#header').classList.remove('dark');
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

  gsap.to('.covervideo', {
        
    opacity: 0,
      scrollTrigger: {
      trigger: "#section01",
      start: "1200 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.text01', {
        
    x: -400,
    y: 1000,
    rotation: 40,
      scrollTrigger: {
      trigger: "#section01",
      start: "400 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.text02', {
        
    x: 400,
    y: -1000,
    rotation: -40,
      scrollTrigger: {
      trigger: "#section01",
      start: "400 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.text03', {
        
    x: -800,
    y: -1000,
    rotation: 80,
      scrollTrigger: {
      trigger: "#section01",
      start: "400 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.text04', {
        
    x: 800,
    y: 1000,
    rotation: 80,
      scrollTrigger: {
      trigger: "#section01",
      start: "400 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.name01', {
        
    x: -900,
      scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('.name02', {
        
    x: 900,
      scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

// section02

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

  gsap.to('.mainimg02', {
        
    // scale: .1,
    y: -250,
    x: 100,
    width: 0,
    height: 0,
      scrollTrigger: {
      trigger: "#section02",
      start: "top top",
      end: '2000',
      scrub: true,
      }
  });


// section03

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

  gsap.to('.circle01', {
        
    width: 3000,
    height: 3000,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.circle02', {
        
    width: 3000,
    height: 3000,
      scrollTrigger: {
      trigger: "#section03",
      start: "1000 top",
      end: '+=1000',
      scrub: true,
      }
  }); 

  gsap.to('.circle03', {
        
    width: 3000,
    height: 3000,
    rotation: 200,
      scrollTrigger: {
      trigger: "#section03",
      start: "+=1500",
      end: '+=1000',
      scrub: true,
      }
  });


