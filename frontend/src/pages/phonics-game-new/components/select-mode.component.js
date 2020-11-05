import React, { useState } from 'react';
import CarouselMenu from '../../../components/carousel-menu/carousel-menu.component';
import { Container } from 'semantic-ui-react';
import { onGameStart } from '../../../actions/phonicsGameActions';

const SelectMode = ({ gameType, gameLevel, setGameMode, handleFetchWordsAsync }) => {
    const blends = ['ch', 'sh', 'wh', 'th', 'ck', 'random'];
    const cvc = ['a', 'e', 'i', 'o', 'u', 'random'];

    return (
        <Container>
        {
        gameType === 'competitve' ? 
            <CarouselMenu 
                onClickItemTarget={setGameMode} 
                items={['Classic Mode', 'Marathon']} 
            /> :
            <CarouselMenu 
                onClickItemTarget={setGameMode} 
                items={gameLevel !== 'blends' ? cvc : blends} 
            />
        }
        </Container>      
    );
};

export default SelectMode;