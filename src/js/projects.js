
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle'

 new Swiper(".ProjectsSwiper", {
    navigation: {
      nextEl: ".project_icon-arrow-left",
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
  