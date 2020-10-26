import React, { useEffect } from 'react';

import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component'

import { fetchCurrentWordsAsync } from '../../../actions/phonicsGameActions';
import { connect } from 'react-redux';


const PhonicsGame = ({ isFetching, fetchCurrentWordsAsync })=> {
    
   useEffect(()=>{
       fetchCurrentWordsAsync();
   }, [])
    return (
        <div>
            <GameDashboard />
            <DropzoneContainer />
            <AlphabetContainer />
  
        </div>
    )
};

const mapStateToProps = state => ({
    isFetching: state.phonicsGameReducer.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentWordsAsync: ()=>dispatch(fetchCurrentWordsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonicsGame);