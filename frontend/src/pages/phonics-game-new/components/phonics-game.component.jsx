import React, { useEffect } from 'react';

import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component'

import { fetchCurrentWordsAsync, onRoundComplete, onRoundStart } from '../../../actions/phonicsGameActions';
import { connect } from 'react-redux';
import { internalTimer } from '../../../reducers/phonics-game-reducer/phonics-game.utils'

const PhonicsGame = ({ isFetching, onRoundStart, fetchSuccessful, fetchCurrentWordsAsync })=> {
    
    useEffect( async ()=>{
       await fetchCurrentWordsAsync();
       onRoundStart();
        internalTimer.start()

   }, [])

    return (
        fetchSuccessful ? 
        (<div>
            <GameDashboard />
            <DropzoneContainer />
            <AlphabetContainer />
  
        </div>) : ("NOTHING")
        )
};

const mapStateToProps = state => ({
    isFetching: state.phonicsGameReducer.isFetching,
    fetchSuccessful: state.phonicsGameReducer.currentWords
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentWordsAsync: ()=>dispatch(fetchCurrentWordsAsync()),
    onRoundComplete: ()=>dispatch(onRoundComplete()),
    onRoundStart: ()=>dispatch(onRoundStart())

});

export default connect(mapStateToProps, mapDispatchToProps)(PhonicsGame);