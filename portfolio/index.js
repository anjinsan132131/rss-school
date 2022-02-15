console.log('Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20');

import i18Obj from "./translate.js";

const burger = document.querySelector('.header-burger');
const menuList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
// const portfolioButtonWinter = document.querySelector('.portfolio-button-winter');
// const portfolioButtonSpring = document.querySelector('.portfolio-button-spring');
// const portfolioButtonSummer = document.querySelector('.portfolio-button-summer');
// const portfolioButtonAutumn = document.querySelector('.portfolio-button-autumn');
const portfolioNav = document.querySelector('.portfolio-nav')
const portfolioImage = document.querySelectorAll('.portfolio-image');
const portfolioButtons = document.querySelectorAll('.portfolio-button');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const elements = document.querySelectorAll('[data-i18]');
const logo = document.querySelector('.header-logo');
const langButtonEn = document.querySelector('.lang-button-en');
const langButtonRu = document.querySelector('.lang-button-ru');
const themeButton = document.querySelector('.theme-button');
const docBody = document.querySelector('body');

function toggleMenu() {
  menuList.classList.toggle('nav-list-active');
  burger.classList.toggle('header-burger-active');
}
burger.addEventListener('click', toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', toggleMenu));


// portfolioButtonWinter.addEventListener('click', () => {
//   portfolioImage.forEach((img, index) => img.src = `./images/content/seasons/winter/${index + 1}.jpg`);
// });
// portfolioButtonSpring.addEventListener('click', () => {
//   portfolioImage.forEach((img, index) => img.src = `./images/content/seasons/spring/${index + 1}.jpg`);
// });
// portfolioButtonSummer.addEventListener('click', () => {
//   portfolioImage.forEach((img, index) => img.src = `./images/content/seasons/summer/${index + 1}.jpg`);
// });
// portfolioButtonAutumn.addEventListener('click', () => {
//   portfolioImage.forEach((img, index) => img.src = `./images/content/seasons/autumn/${index + 1}.jpg`);
// });

function changeImage(event) {
  if(event.target.classList.contains('portfolio-button')) {
    portfolioButtons.forEach(element => element.classList.remove('portfolio-button-active'));
    let dataSeason = event.target.dataset.season;
    portfolioImage.forEach((img, index) => img.src = `./images/content/seasons/${dataSeason}/${index + 1}.jpg`);
    event.target.classList.add('portfolio-button-active');
  }
}

portfolioNav.addEventListener('click', changeImage);

function getTranslateRu() {
  elements.forEach((element) => {
    let dataValue = element.dataset.i18;
      
    if (element.placeholder) {
      element.placeholder = i18Obj.ru[dataValue];
    }
    element.textContent = i18Obj.ru[dataValue];
  });
  langButtonEn.classList.remove('lang-button-active');
  langButtonRu.classList.add('lang-button-active');
  logo.classList.add('logo-rus');
  localStorage.setItem('lang', 'ru');
}

function getTranslateEn() {
  elements.forEach((element) => {
    let dataValue = element.dataset.i18;

    if (element.placeholder) {
      element.placeholder = i18Obj.en[dataValue];
    }
    element.textContent = i18Obj.en[dataValue];
  });
  langButtonRu.classList.remove('lang-button-active');
  langButtonEn.classList.add('lang-button-active');
  logo.classList.remove('logo-rus');
  localStorage.setItem('lang', 'en');
}

langButtonRu.addEventListener('click', getTranslateRu);
langButtonEn.addEventListener('click', getTranslateEn);

themeButton.addEventListener('click', () => {
  docBody.classList.toggle('white-theam');
  if (docBody.classList.contains('white-theam')) {
    localStorage.setItem('theme', 'white-theam');
  } else {
    localStorage.setItem('theme', 'dark-theam');
  }
});


function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');

    if(lang === 'ru') {
      getTranslateRu();
    } 
  }

  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');

    if(theme === 'white-theam') {
      docBody.classList.add('white-theam');
    }
  }
}
window.addEventListener('load',  getLocalStorage);
