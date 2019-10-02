$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function () {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function () {
      $('html, body').animate( {
          scrollTop: $($(this).attr('href')).offset().top - 100
      }, 2000);
  });

  $('#up').on('click', function () {
      $('html, body').animate( {
          scrollTop: 0
      }, 2000);
  });

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});

const toggleModal = () => {
  document.querySelector('.modal')
  .classList.toggle('modal-hidden');
};

const toggleWrapper = () => {
  document.querySelector('.wrapper')
  .classList.toggle('modal-mode');
};

const toggleIframe = () => {
  document.querySelector('.iframe')
  .classList.toggle('iframe-hidden');
};

document.querySelector('#view-details')
.addEventListener('click', toggleModal);

document.querySelector('#view-details')
.addEventListener('click', toggleWrapper);

document.querySelector('#open-iframe')
.addEventListener('click', toggleIframe);

document.querySelector('#open-iframe')
.addEventListener('click', toggleWrapper);

document.querySelector('.close-bar span')
.addEventListener('click', toggleModal);

document.querySelector('.close-bar span')
.addEventListener('click', toggleWrapper);



