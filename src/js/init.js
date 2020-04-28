import { store } from './store.js';

let scores, gamePlay, roundScore, activePlayer;

let init = () => {
	activePlayer = 0;
	scores = [0, 0];
	roundScore = 0;
	gamePlay = true;
	store.scoreFirstPlayer.textContent = '0';
	store.scoreSecondPlayer.textContent = '0';
	store.currentScoreFirstPlayer.textContent = '0';
	store.currentScoreSecondPlayer.textContent = '0';
	store.firstPlayer.classList.add('active');
	store.firstPlayer.classList.remove('winner');
	store.secondPlayer.classList.remove('active');
	store.secondPlayer.classList.remove('winner');
	store.nameFirstPlayer.textContent = 'Player 1';
	store.nameSecondPlayer.textContent = 'Player 2';
};

export { init };
