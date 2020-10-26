import React from 'react';

import Thumbnail from '../thumbnail/thumbnail.component';
import Timer from '../timer/timer.component';
import DeckIndex from '../deck-index/deck-index.component';
import Button from '../button/button';
import Points from '../points/points.component';

const GameDashboard = () => {
    
return (
    <div>
        <h1>Game Dashboard</h1>
        <div className="left">
            <Timer />
            <Points />
            <DeckIndex />
        </div>
        <div className="thumbnail">
            <Thumbnail />
        </div>
        <div className="right">
            <Button label="pause" />
            <Button label="help" />
            <Button label="listen" />
        </div>
    </div>
    );
};

export default GameDashboard;