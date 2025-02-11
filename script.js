document.addEventListener('DOMContentLoaded', function () {
  // Анимация загрузки сайта
  gsap.from('.hero__title', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: 'power3.out',
    delay: 0.5
  });

  gsap.from('.hero__descr', {
    duration: 1.5,
    opacity: 0,
    // y: 50,
    ease: 'power3.out',
    delay: 1
  });

  gsap.from('.hero__btn', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: 'power3.out',
    delay: 0.5
  });

  gsap.from('.photos__author', {
    duration: 1.5,
    opacity: 0,
    ease: 'power3.out',
    delay: 1.5
  });

  gsap.from('.photos-wrap img', {
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    ease: 'power3.out',
    stagger: 0.2,
    delay: 1
  });

  gsap.from('.hero', {
    duration: 2,
    opacity: 0,
    ease: 'power3.out'
  });

  // Анимация бургер-меню
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const closeBtn = document.querySelector('.close');

  const menuAnimation = gsap.timeline({ paused: true });

  // Анимация для фона меню
  menuAnimation.fromTo(
    menu,
    { opacity: 0, visibility: 'hidden' },
    { opacity: 1, visibility: 'visible', duration: 0.5, ease: 'power2.inOut' }
  );

  // Анимация для левой части (навигация)
  menuAnimation.from(
    '.menu__nav .nav__item',
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
      // stagger: 0.1
    },
    '-=0.3'
  );

  // Анимация для правой части (подменю) с задержкой
  menuAnimation.from(
    '.sub-menu',
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    },
    '-=0.2'
  );

  // Анимация для социальных иконок
  menuAnimation.from(
    '.social__item',
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    },
    '-=0.3'
  );

  // Обработчик для открытия меню
  burger.addEventListener('click', function () {
    menu.classList.add('menu--open');
    menuAnimation.play(); // Запускаем анимацию
  });

  // Обработчик для закрытия меню
  closeBtn.addEventListener('click', function () {
    menuAnimation.reverse(); // Обратная анимация
    setTimeout(() => {
      menu.classList.remove('menu--open'); // Убираем класс после завершения анимации
    }, 500); // Задержка, равная длительности анимации
  });
});
