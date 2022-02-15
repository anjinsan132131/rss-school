const url = 'https://type.fit/api/quotes';
const contentBlock = document.querySelector('.content');
const smileButton = document.querySelector('.button');
const author = document.querySelector('.author');
const text = document.querySelector('.text');
const imageBean = document.querySelector('.image-bean');
const audio = document.querySelector('.audio');
const langButtonRu = document.querySelector('.lang-button-ru');
const langButtonEn = document.querySelector('.lang-button-en');
let quotes = [];

async function getRussianQuotes() {  
  const quotesArray = 'data.json';
  const res = await fetch(quotesArray);
  quotes = await res.json(); 
  getRandomQuote();
  toogleActiveLangClass();
  smileButton.textContent = 'Выбери цитату';
}

function getEnglishQuotes() {
  getData();
  toogleActiveLangClass();
  smileButton.textContent = 'Choose quote';
}

function toogleActiveLangClass() {
  langButtonRu.classList.toggle('lang-button-active');
  langButtonEn.classList.toggle('lang-button-active');
}


function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      quotes = data;
      getRandomQuote();
    });
}

function getRandomQuote() {
  let quote = quotes[randomInteger(1, quotes.length - 1)];
  text.innerHTML = quote.text;
  author.innerHTML = quote.author;
}

smileButton.addEventListener('click', () => {
  getRandomQuote();
  playAudio();
  imageBean.classList.remove('animation');
  imageBean.offsetWidht = imageBean.offsetWidth;
  imageBean.classList.add('animation');
});

getData();

langButtonRu.addEventListener('click', getRussianQuotes);

langButtonEn.addEventListener('click', getEnglishQuotes);
