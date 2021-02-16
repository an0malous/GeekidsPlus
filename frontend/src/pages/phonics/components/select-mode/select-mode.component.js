import React from 'react';
import CarouselMenu from '../../../../components/carousel-menu/carousel-menu.component';
import { Container } from 'semantic-ui-react';

const SelectMode = ({ gameType, gameLevel, setGameMode }) => {
    const blends = ['ch', 'sh', 'wh', 'th', 'ck', 'random'];
    const cvc = ['a', 'e', 'i', 'o', 'u', 'random'];

    return (
        <Container>
        {
        gameType === 'competitive' ? 
            <CarouselMenu 
                onClickItemTarget={setGameMode} 
                items={['classic', 'marathon']} 
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