import React, { useEffect } from 'react';

import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component'
import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import RoundBreakdown from '../../../components/round-breakdown/round-breakdown';
import { fetchCurrentWordsAsync, onRoundComplete, onRoundStart } from '../../../actions/phonicsGameActions';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

const PhonicsGame = ({ openRoundBreakdown, onRoundStart, fetchSuccessful, fetchCurrentWordsAsync })=> {
    
    useEffect( async ()=>{
       await fetchCurrentWordsAsync();
       onRoundStart()

   }, [])
   
    return (
        fetchSuccessful.length > 1 ? 
        (<div>
            {openRoundBreakdown ? <RoundBreakdown /> : null }
            <GameDashboard />
            <DropzoneContainer />
            <AlphabetContainer />
        </div>) : ("Loading...")
        )
};

const mapStateToProps = state => ({
    isFetching: state.phonicsGameReducer.isFetching,
    fetchSuccessful: state.phonicsGameReducer.currentWords,
    openRoundBreakdown: state.phonicsGameReducer.openRoundBreakdown
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentWordsAsync: ()=>dispatch(fetchCurrentWordsAsync()),
    onRoundComplete: ()=>dispatch(onRoundComplete()),
    onRoundStart: ()=>dispatch(onRoundStart())

});

export default connect(mapStateToProps, mapDispatchToProps)(PhonicsGame);