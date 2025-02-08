
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".icon-arrow-left",
      prevEl: ".icon-arrow-right",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown:  true,
    },


    Mousewheel: {
        sensetivity: 1, 
    }
  });