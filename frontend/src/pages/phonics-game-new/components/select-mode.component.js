import React, { useState } from 'react';
import CarouselMenu from '../../../components/carousel-menu/carousel-menu.component';
import { Container } from 'semantic-ui-react';
import { onGameStart } from '../../../actions/phonicsGameActions';

const SelectMode = ({ gameLevel, setGameMode, handleFetchWordsAsync }) => {
    const [selectedMode, setSelectedMode] = useState('')
    const blends = ['ch', 'sh', 'wh', 'th', 'ck', 'random'];
    const cvc = ['a', 'e', 'i', 'o', 'u', 'random'];

    return (
        <Container>
            <CarouselMenu 
                onChange={()=>setSelectedMode()} 
                items={gameLevel !== 'blends' ? cvc : blends} 
            />

            <button onClick={()=>{setGameMode({selectedMode})}}>Start Game</button>
            
        </Container>      
    );
};

export default SelectMode;