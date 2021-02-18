import React, { useEffect, useRef } from 'react';

import DropzoneContainer from '../dropzone-container/dropzone-container.component';
import AlphabetContainer from '../alphabetcard-container/alphabet-container.component';
import GameDashboardContainer from '../game-dashboard-container/game-dashboard-container.component';
import RoundBreakdown from '../../../../components/round-breakdown/round-breakdown';

const PhonicsGame = ({
	openRoundBreakdown,
	currentWords,
	currentDeckIndex,
	onTimerTick
}) => {
	const timer = useRef(null);
	useEffect(() => {
		timer.current = setInterval(onTimerTick, 1000);
		return () => clearInterval(timer.current);
	}, [onTimerTick, currentDeckIndex]);

	return (
		<div>
			{openRoundBreakdown ? <RoundBreakdown /> : null}
			<GameDashboardContainer />
			<DropzoneContainer
				timer={timer}
			/>
			<AlphabetContainer
				currentWords={currentWords}
				currentDeckIndex={currentDeckIndex}
			/>
		</div>
	);
};

export default PhonicsGame;
