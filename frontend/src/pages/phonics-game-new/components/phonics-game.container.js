import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import PhonicsGame from './phonics-game.component';

const PhonicsGameContainer = () => {
    //Game Logic goes here
    return (
        <Container>
            <PhonicsGame />
        </Container>
    )
};

export default PhonicsGameContainer;