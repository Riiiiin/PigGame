import { store } from './store.js';
import { gameLogic } from './gameLogic.js';

let init = () => {
	gameLogic.activePlayer = 0;
	gameLogic.scores = [0, 0];
	gameLogic.roundScore = 0;
	gameLogic.gamePlay = true;
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
