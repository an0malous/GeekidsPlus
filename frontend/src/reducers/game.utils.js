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

export const calculateLetterBonus = (roundTime, helpActivated) => {

	
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
console.log('BONUS', bonus)
	return bonus;
}

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
				return word.type === gameLevel && gameMode.includes(word.letter);
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

export const checkIfLetterIsCorrect = ((e, currentWordLetters, roundTime ) => {

	for (let i = 0; i < currentWordLetters.length; i++) {
		if (
			currentWordLetters[i] === e.relatedTarget.innerText &&
			e.relatedTarget.innerText === e.target.innerText
		) {
			const letterPoints = calculateLetterBonus(roundTime);
			e.relatedTarget.classList.remove('draggable');
			console.log(letterPoints)
			return {correctCounter: 1, letterPoints};
		} 
	}
			return {correctCounter: 0, letterPoints: 0}
})
