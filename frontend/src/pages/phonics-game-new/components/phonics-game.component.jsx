import React, { useEffect } from 'react';

import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component'
import GameDashboard from '../../../components/game-dashboard/new-game-dashboard';
import { fetchCurrentWordsAsync, onRoundComplete, onRoundStart } from '../../../actions/phonicsGameActions';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

const PhonicsGame = ({ isFetching, onRoundStart, fetchSuccessful, fetchCurrentWordsAsync })=> {
    
    useEffect( async ()=>{
       await fetchCurrentWordsAsync();
       onRoundStart()

   }, [])
{console.log("RENDER")}
    return (
        fetchSuccessful.length > 1 ? 
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