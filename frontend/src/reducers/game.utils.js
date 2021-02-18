import { shuffle } from '../utils';

const bonusCalc = (roundTime) => {
	switch (true) {
		case roundTime <= 15:
			return 200;
		case roundTime <= 30:
			return 100;
		case roundTime <= 60:
			return 60;
		case roundTime <= 150:
			return 40;
		case roundTime <= 300:
			return 20;
		default:
			return 10;
	}
};

export const calculateLetterBonus = (roundTime, helpActivated = false) => {
	let bonus = 0;

	switch (true) {
		case roundTime <= 2:
			bonus = 100;
			break;
		case roundTime < 5:
			bonus = 50;
			break;

		case roundTime < 10:
			bonus = 40;
			break;

		case roundTime < 20:
			bonus = 30;
			break;

		case roundTime < 30:
			bonus = 20;
			break;
		default:
			bonus = 10;
			break;
	}

	return bonus;
};

export const onHelp =(currentWord, currentWordLetters) => {
	const difficultLetters = [];
	
	for (let i = 0; i < currentWord; i++) {
		if (dropzone[i].classList.contains('correct') != true) {
			difficultLetters.push(currentWordLetters[i]);
		}
		const alphabetSquares = document.querySelectorAll('.alphabet-card');

		for (let square of alphabetSquares) {
			if (square.textContent === difficultLetters[0]) {
				square.classList.add('active');
			}
		}
	}
	this.difficultLetters = [];
};

export const calculatePoints = (currentWordLength = 0, time = 0) => {
	return Math.floor(currentWordLength * 5 + bonusCalc(time));
};

export const filterWordData = (words, { gameLevel, gameMode, gameType }) => {
	console.log(gameLevel, gameMode, gameType);
	const filteredData = shuffle(
		words.filter((word) => {
			if (gameType === 'competitive') {
				return word.type === gameLevel;
			} else {
				return word.type === gameLevel && word.letter === gameMode;
			}
		})
	);
	return filteredData;
};

export const createCurrentWordLetters = (currentWord) => {
	const { name, type, letter } = currentWord;
	const blend = [...letter];
	const word = [...name];

	if (type === 'blends') {
		for (let i = 0; i < word.length; i++) {
			if (word[i] === blend[0] && word[i + 1] === blend[1]) {
				word.splice(i, 2, letter);
			}
		}
	}
	return word;
};
