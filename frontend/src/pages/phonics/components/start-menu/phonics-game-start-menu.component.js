import React, { useState } from 'react';
import SelectType from '../select-type/select-type.component';
import SelectLevel from '../select-level/select-level.component';
import SelectMode from '../select-mode/select-mode.component';

const PhonicsGameStartMenu = ({
	onGameStart,
	fetchCurrentWords,
	getGameParams,
}) => {
	const [gameType, setGameType] = useState('');
	const [gameLevel, setGameLevel] = useState('');
	const [gameMode, setGameMode] = useState('');

	const createGameParams = (gameType, gameLevel, gameMode, ...rest) => {
		const gameParams = { gameLevel, gameType, gameMode, ...rest };
		gameParams.initialClock = 0;
		gameParams.tick = 1;
		if (gameMode === 'classic') {
			gameParams.initialClock = 600;
			gameParams.tick = -1;
		}
		return gameParams;
	};

	const handleOnGameStart = () => {
		const gameInfo = createGameParams(gameType, gameLevel, gameMode);
		getGameParams(gameInfo);
		fetchCurrentWords();
		onGameStart();
	};
	return (
		<div>
			{!gameType ? (
				<SelectType setGameType={setGameType} />
			) : !gameLevel ? (
				<SelectLevel setGameLevel={setGameLevel} />
			) : gameLevel && !gameMode ? (
				<SelectMode gameType={gameType} gameLevel={gameLevel} setGameMode={setGameMode} />
			) : (
				<button onClick={() => handleOnGameStart()}>Start Game</button>
			)}
		</div>
	);
};

export default PhonicsGameStartMenu;
