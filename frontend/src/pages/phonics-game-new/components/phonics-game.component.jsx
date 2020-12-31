import React, { useEffect } from 'react';

import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component';
import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import RoundBreakdown from '../../../components/round-breakdown/round-breakdown';
import { connect } from 'react-redux';

const PhonicsGame = ({ openRoundBreakdown }) => {
	return (
		<div>
			{openRoundBreakdown ? <RoundBreakdown /> : null}
			<GameDashboard />
			<DropzoneContainer />
			<AlphabetContainer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isFetching: state.phonicsGameReducer.isFetching,
	fetchSuccessful: state.phonicsGameReducer.currentWords,
	openRoundBreakdown: state.phonicsGameReducer.openRoundBreakdown,
});

export default connect(mapStateToProps)(PhonicsGame);
