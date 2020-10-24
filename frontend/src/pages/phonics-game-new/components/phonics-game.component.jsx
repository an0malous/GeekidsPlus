import React from 'react';

import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component'


const PhonicsGame = ()=> {
    return (
        <div>
            <GameDashboard />
            <DropzoneContainer />
            <AlphabetContainer />
        </div>
    )
};

export default PhonicsGame;