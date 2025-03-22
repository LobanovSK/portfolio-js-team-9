import axios from 'axios';

// Обрізання повідомлення...
const input = document.querySelector('.footer-form-input.comment');
if (input) {
  input.addEventListener('blur', event => {
    const maxLength = parseInt(event.target.getAttribute('data-maxlength'), 10);
    if (event.target.value.length > maxLength) {
      event.target.title = event.target.value;
      event.target.value = event.target.value.slice(0, maxLength - 3) + '...';
    } else {
      event.target.title = '';
    }
  });
}

// Пошук елементів
const footerFormEl = document.querySelector('.footer-form');
const inputEmailEl = document.querySelector('.footer-form-input.email');
const inputCommentEl = document.querySelector('.footer-form-input.comment');
const backdropEl = document.querySelector('.backdrop');
const modalCloseBtnEl = document.querySelector('.footer-modal-close-btn');
const modalTitleEl = document.querySelector('.footer-modal-title');
const modalTextEl = document.querySelector('.footer-modal-text');

// Функція для обробки події submit форми
const handleSubmit = async event => {
  event.preventDefault();
  const userEmail = inputEmailEl.value.trim();
  const userComment = inputCommentEl.value.trim();

  try {
    await axios.post('https://portfolio-js.b.goit.study/api/requests', {
      email: userEmail,
      comment: userComment,
    });
    inputEmailEl.value = '';
    inputCommentEl.value = '';
    openModal();
  } catch (err) {
    modalTitleEl.classList.add('footer-error-title');
    modalTitleEl.textContent = 'Error!';
    modalTextEl.classList.add('footer-error-text');
    modalTextEl.textContent =
      'There was an error submitting your form. Please check the entered data and try again.';
    openModal();
  }
};

// Додаємо слухач події submit до форми
footerFormEl.addEventListener('submit', handleSubmit);

// Функція-обробник для події keydown (Escape)
const handleEscapeKey = event => {
  if (event.key === 'Escape' || event.code === 'Escape') {
    closeModal();
  }
};

// Відкриття модального вікна
const openModal = () => {
  backdropEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscapeKey);
};

// Закриття модального вікна
const closeModal = () => {
  backdropEl.classList.remove('is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscapeKey);
};

// Додаємо слухачі для закриття модального вікна
modalCloseBtnEl.addEventListener('click', closeModal);

backdropEl.addEventListener('click', event => {
  if (event.target === backdropEl) {
    closeModal();
  }
});
