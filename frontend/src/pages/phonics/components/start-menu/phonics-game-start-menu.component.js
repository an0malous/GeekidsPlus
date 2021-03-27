import React, { useState } from 'react';
import SelectType from '../select-type/select-type.component';
import SelectLevel from '../select-level/select-level.component';
import SelectMode from '../select-mode/select-mode.component';

const PhonicsGameStartMenu = ({
	onGameStart,
	fetchCurrentWords,
	getGameParams,
	setModalHeader
}) => {
	const [gameType, setGameType] = useState('');
	const [gameLevel, setGameLevel] = useState('');
	const [gameMode, setGameMode] = useState('');

	const createGameParams = (gameType, gameLevel, gameMode, ...rest) => {
		const gameParams = { gameLevel, gameType, gameMode, ...rest };
		gameParams.initialClock = 0;
		gameParams.tick = 1;
		if (gameMode === 'classic' || 'クラシック') {
			gameParams.initialClock = 600;
			gameParams.tick = -1;
		}
		return gameParams;
	};

	const handleGameInit = (item) => {
		setModalHeader(`${gameType} / ${gameLevel} - ${gameMode} mode`)
		const gameInfo = createGameParams(gameType, gameLevel, gameMode);
		getGameParams(gameInfo);
		fetchCurrentWords();
		onGameStart();
	};

	if(gameMode){
		handleGameInit()
	}
	
	if(!gameType){
		return <SelectType setModalHeader={setModalHeader} setGameType={setGameType} />;
	}
	if(!gameLevel){
		
		return <SelectLevel setModalHeader={setModalHeader} setGameLevel={setGameLevel} />;
	} else {
		
		return <SelectMode gameType={gameType} gameLevel={gameLevel} setGameMode={setGameMode}/>;
	} 
};

export default PhonicsGameStartMenu;
