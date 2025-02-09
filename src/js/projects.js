
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".projects_icon-arrow-left",
      prevEl: ".projects_icon-arrow-right",
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