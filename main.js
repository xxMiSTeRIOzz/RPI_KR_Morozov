// Объявляем переменные для таймера
let timerInterval;
let startTime;

// Функция для обновления времени на таймере
function updateTimer() {
    let currentTime = performance.now();
    let deltaTime = currentTime - startTime;
    
    // Преобразуем deltaTime в минуты, секунды и миллисекунды
    let minutes = Math.floor(deltaTime / 60000);
    let seconds = Math.floor((deltaTime % 60000) / 1000);
    let milliseconds = Math.floor(deltaTime % 1000);

    // Приводим значения к нужному формату (добавляем ведущие нули)
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayMilliseconds = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;

    // Обновляем содержимое элементов таймера
    document.getElementById('timer-minutes').textContent = displayMinutes;
    document.getElementById('timer-seconds').textContent = displaySeconds;
    document.getElementById('timer-ms').textContent = displayMilliseconds;
}

// Функция для запуска таймера
function startTimer() {
    if (!timerInterval) {
        startTime = performance.now(); // Запоминаем время старта таймера
        timerInterval = setInterval(updateTimer, 10); // Запускаем обновление времени каждые 10 миллисекунд
    }
}

// Получаем все карты с классом memory-card
const memoryCards = document.querySelectorAll('.memory-card');

// Добавляем обработчик событий для каждой карты
memoryCards.forEach(card => {
    card.addEventListener('click', function() {
        // При нажатии на карту запускаем таймер, если он еще не запущен
        startTimer();
    });
});

(function() { 
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

  this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return; 
  }
     
    secondCard = this;
    lockBoard = true;
     
    checkForMatch();
  }
     
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }
     
    unflipCards();
  }
     
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }
     
  function unflipCards() {

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.ceil(Math.random() * 16);
      card.style.order = ramdomPos;
    });
  })();

  cards.forEach(card => card.addEventListener('click', flipCard));

})();

let button = document.querySelector('.btn');

function playAgain() {
  window.location.reload();
}

button.addEventListener('click', playAgain);
  




  






