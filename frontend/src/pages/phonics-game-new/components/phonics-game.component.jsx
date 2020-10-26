import React, { useEffect } from 'react';

import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component'

import { fetchCurrentWordsAsync } from '../../../actions/phonicsGameActions';
import { connect } from 'react-redux';


const PhonicsGame = ({ isFetching, fetchSuccessful, fetchCurrentWordsAsync })=> {
    
   useEffect(()=>{
       fetchCurrentWordsAsync();
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
    fetchCurrentWordsAsync: ()=>dispatch(fetchCurrentWordsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonicsGame);