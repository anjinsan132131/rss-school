const button = document.querySelector('.audio-button');
const audio = document.querySelector('.audio');
const navItems = document.querySelectorAll('.nav-item');
const audioContent = document.querySelector('.audio-content');
const navList = document.querySelector('.nav-list');
let isPlay = false;

function playAudio() {
  isPlay = true;
  audio.currentTime = 0;
  audio.play();
  button.classList.remove('audio-button-play');
  button.classList.add('audio-button-pause');
}

function pauseAudio() {
  isPlay = false;
  audio.pause();
  button.classList.add('audio-button-play');
  button.classList.remove('audio-button-pause');
}

function toggleBtn() {
  if(isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function changeImage(event) {
  if(event.target.classList.contains('nav-item')) {
    navItems.forEach(element => element.classList.remove('nav-item-active'));
    let dataName = event.target.dataset.name;
    audioContent.style.backgroundImage = `url(./assets/img/${dataName}.jpg)`;
    audio.src = `./assets/audio/${dataName}.mp3`;
    event.target.classList.add('nav-item-active');
    playAudio();
  }
}

button.addEventListener('click', toggleBtn);
navList.addEventListener('click', changeImage);

