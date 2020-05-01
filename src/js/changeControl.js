import { store } from './store.js';
import { gameLogic } from './gameLogic.js';

let changeControl = () => {
	if (gameLogic.activePlayer === 0) {
		gameLogic.activePlayer = 1;
		store.firstPlayer.classList.remove('active');
		store.secondPlayer.classList.add('active');
	} else {
		gameLogic.activePlayer = 0;
		store.firstPlayer.classList.add('active');
		store.secondPlayer.classList.remove('active');
	}

	gameLogic.roundScore = 0;
	store.currentScoreFirstPlayer.textContent = '0';
	store.currentScoreSecondPlayer.textContent = '0';
};

export { changeControl };
