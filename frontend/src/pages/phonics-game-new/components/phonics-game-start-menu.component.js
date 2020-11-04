import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SelectType from './select-type.component';
import SelectLevel from './select-level.component';
import SelectMode from './select-mode.component';
import { fetchCurrentWordsAsync, onGameStart } from '../../../actions/phonicsGameActions';

const PhonicsGameStartMenu = ({ onGameStart, fetchCurrentWordsAsync }) => {

    const [gameType, setGameType] = useState(null)
    const [gameLevel, setGameLevel] = useState(null)
    const [gameMode, setGameMode] = useState(null)
    
    return (
        <div>
            { !gameType && !gameLevel && !gameMode ?  <SelectType setGameType={setGameType} /> : null }
        
            { gameType && !gameMode && !gameLevel ? <SelectLevel setGameLevel={setGameLevel} /> : null }

            { gameType && gameLevel ? <SelectMode setGameMode={setGameMode} /> : null }
            
        </div>
    );

};

const mapDispatchToProps = dispatch => ({
    fetchCurrentWordsAsync: ()=>dispatch(fetchCurrentWordsAsync()),
    onGameStart: ()=>dispatch(onGameStart())

});

export default connect(null, mapDispatchToProps)(PhonicsGameStartMenu);