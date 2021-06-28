const body = document.querySelector('body');

const closeIcon = document.querySelector('#close-icon');

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
  body.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  body.classList.remove('active');
});
