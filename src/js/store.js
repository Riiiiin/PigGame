let store = {
	firstPlayer: document.querySelector('.player-0-panel'),
	secondPlayer: document.querySelector('.player-1-panel'),

	scoreFirstPlayer: document.querySelector('#score-0'),
	scoreSecondPlayer: document.querySelector('#score-1'),

	currentScoreFirstPlayer: document.querySelector('#current-0'),
	currentScoreSecondPlayer: document.querySelector('#current-1'),

	btnRoll: document.querySelector('.btn-roll'),
	btnHold: document.querySelector('.btn-hold'),

	dice: document.querySelector('.dice'),
};

export { store };
