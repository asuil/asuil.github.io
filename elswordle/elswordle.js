const MAX_ATTEMPTS = 6;
const HINTS_PER_GUESS = 5;
const STORAGE_KEY = 'elswordle_game';

let targetCharacter = null;

function seededRandom(seed) {
  // Mulberry32 PRNG
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sortCharactersDeterministically(characters, seed) {
  const rng = seededRandom(seed);
  return [...characters].sort((a, b) => {
    return rng() - 0.5; // Simulate randomness with seed
  });
}

function pickDailyCharacter() {
  const startDate = new Date("2025-05-16");
  const daysSince = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));
  const iterationNumber = Math.floor(daysSince / characters.length) + 1;
  const seed = 528 + iterationNumber;
  const offset = daysSince % characters.length
  targetCharacter = sortCharactersDeterministically(characters, seed)[offset];
}

function getStoredProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : { guesses: [], streak: 0, lastPlayed: null };
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function compareChars(guessChar, targetChar) {
  const guessEffects = effects[guessChar];
  const targetEffects = effects[targetChar];

  const guessBaseCharacter = baseCharacters[guessChar];
  const targetBaseCharacter = baseCharacters[targetChar];

  const guessAttackType = characterAttackType[guessChar];
  const targetAttackType = characterAttackType[targetChar];

  return [
    { effect: guessBaseCharacter, status: guessBaseCharacter === targetBaseCharacter ? 'correct' : 'incorrect'  },
    { effect: guessAttackType, status: guessAttackType === targetAttackType ? 'correct' : 'incorrect' },
    ...Object.keys(guessEffects).map(effect => {
      if (targetEffects[effect]) {
        return { effect, status: 'correct' };
      }
      return { effect, status: 'incorrect' };
    })
  ];
}

function isVictory(progress) {
  return progress.guesses.includes(targetCharacter);
}

function isGameOver(progress) {
  return progress.guesses.length >= MAX_ATTEMPTS || isVictory(progress);
}

function checkGameEnd() {
  const progress = getStoredProgress();

  if (isGameOver(progress)) {
    const overlay = document.getElementById("overlay");
    const title = document.createElement('h3');
    const subtitle = document.createElement('p');
    const img = document.createElement('img');

    if (isVictory(progress)) {
      title.innerText = "✅ YOU WON ✅";
      subtitle.innerText = targetCharacter;
    } else {
      title.innerText = "❌ GAME OVER ❌";
      subtitle.innerText = `Correct answer: ${targetCharacter}`;
    }

    img.src = icons[targetCharacter];
    overlay.children[0].replaceChildren(title, subtitle, img);
    overlay.classList.remove("none");
  };
}

function handleNewDay() {
  const progress = getStoredProgress();

  if (!progress || !progress.lastPlayed) {
    return
  }

  const today = new Date().toISOString().split('T')[0];
  if (progress.lastPlayed !== today) {
    saveProgress({
      ...progress,
      guesses: [],
    })
  }
}

function submitGuess(guess) {
  const progress = getStoredProgress();
  const today = new Date().toISOString().split('T')[0];
  progress.lastPlayed = today;

  const feedback = compareChars(guess, targetCharacter);
  progress.guesses.push(guess);

  if (guess === targetCharacter) {
    progress.streak += 1;
  } else if (progress.guesses.length === MAX_ATTEMPTS) {
    progress.streak = 0;
  }

  saveProgress(progress);
  renderStreak();
  checkGameEnd();

  return {
    feedback,
    guessNumber: progress.guesses.length,
  };
}

function renderGuessFeedback(feedback, guessNumber) {
  const container = document.querySelector(`#guess-${guessNumber}`);
  feedback.forEach(({ effect, status }, index) => {
    const square = container.querySelectorAll('.square')[index];
    square.className = `square ${status}`;
    const text = document.createElement('span')
    text.innerText = effect;
    square.replaceChildren(text);
  });
}

function disableGuessButton(guess) {
  const button = document.querySelector(`#controls button[name="${guess}"]`);
  button.disabled = true;
}

function handleGuessFeedback(guess, feedback, index) {
  renderGuessFeedback(feedback, index);
  disableGuessButton(guess)
}

function generateEmptyHintSpaces() {
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    const container = document.querySelector(`#guess-${i + 1}`);
    for (let j = 0; j < HINTS_PER_GUESS; j++) {
      const square = document.createElement('div');
      square.className = 'square empty';
      container.appendChild(square);
    }
  }
}

function renderStreak() {
  const streakElement = document.querySelector('#streak');
  const streak = getStoredProgress().streak
  streakElement.innerText = `Current streak: ${streak}`;
}

function setupGame() {
  generateEmptyHintSpaces();

  pickDailyCharacter();
  handleNewDay()
  checkGameEnd()

  const controls = document.querySelector('#controls');
  Object.entries(pathsPerBase).forEach(([_, paths]) => {
    const container = document.createElement('div');

    paths.forEach(path => {
      const option = document.createElement('button');
      option.style.backgroundImage = `url(${icons[path]})`;
      option.name = path;

      option.addEventListener('click', () => {
        const { feedback, guessNumber } = submitGuess(path);
        if (feedback) {
          handleGuessFeedback(path, feedback, guessNumber);
        }
      });

      container.appendChild(option);
    });

    controls.appendChild(container);
  });

  const progress = getStoredProgress();
  progress.guesses.forEach((guess, index) => {
    const feedback = compareChars(guess, targetCharacter);
    handleGuessFeedback(guess, feedback, index + 1);
  })

  renderStreak();
}

document.addEventListener('DOMContentLoaded', setupGame);
