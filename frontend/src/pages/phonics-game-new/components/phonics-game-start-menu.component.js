import React, { useEffect, useState } from 'react';
import SelectType from './select-type.component';
import SelectLevel from './select-level.component';
import SelectMode from './select-mode.component';
const PhonicsGameStartMenu = () => {

    const [gameType, setGameType] = useState('')
    const [gameLevel, setGameLevel] = useState('')
    const [gameMode, setGameMode] = useState('')
    useEffect(()=>{
        
    }, [gameMode])
    return (
    <div>
        { gameType && gameLevel && gameMode ? null : <SelectType setGameType={setGameType} /> }
    
        { gameType && !gameMode && !gameLevel ? <SelectLevel setGameLevel={setGameLevel} /> : null }

        { gameType && gameMode ? <SelectMode setGameMode={setGameMode} /> : null }
        
    </div>
    )

}

export default PhonicsGameStartMenu;