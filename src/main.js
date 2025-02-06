import { initHero } from './hero.js';
import { initAbout } from './about.js';
import { initBenefits } from './benefits.js';
import { initProjects } from './projects.js';
import { initFAQ } from './faq.js';
import { initCovers } from './covers.js';
import { initReviews } from './reviews.js';
import { initWorkTogether } from './work-together.js';

// Инициализация всех секций после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initAbout();
  initBenefits();
  initProjects();
  initFAQ();
  initCovers();
  initReviews();
  initWorkTogether();
});
