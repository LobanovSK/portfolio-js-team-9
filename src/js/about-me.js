'use strict';
import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const swiper2 = new Swiper('.skills-swiper-about-me', {
    wrapperClass: 'skills-list',
    slideClass: 'skills-list-items',
    slideActiveClass: 'chosen',
    modules: [Navigation, Keyboard, Mousewheel],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1440: {
            slidesPerView: 6,
        },
    },

    navigation: {
        nextEl: '.skills-btm',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    mousewheel: {
        enabled: true,
        invert: true,
    },
});

document.querySelector('.skills-btm').addEventListener('click', e => {
    swiper2.slideNext();
});


new Accordion('.accordion-list', {
    duration: 600,
    showMultiple: true,
    openOnInit: [0],
});

new Accordion('.faq-accordion-container', {
    showMultiple: true,
});

// Only for FAQ section

const arrows = document.querySelectorAll('.faq-ac-trigger');

for (const arrow of arrows) {
    arrow.addEventListener('click', UpDown);
}

function UpDown(event) {
    const arrowDown = event.currentTarget.querySelector('.faq-arrow-down');
    const arrowUp = event.currentTarget.querySelector('.faq-arrow-up');
    if (event.currentTarget.getAttribute('aria-expanded') === 'true') {
        arrowDown.classList.add('visually-hidden');
        arrowUp.classList.remove('visually-hidden');
    } else {
        arrowDown.classList.remove('visually-hidden');
        arrowUp.classList.add('visually-hidden');
    }
}
