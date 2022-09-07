let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

play.addEventListener('click', () => {
  play.classList.add('hide');
  pause.classList.remove('hide');
})

pause.addEventListener('click', () => {
  pause.classList.add('hide');
  play.classList.remove('hide');
})