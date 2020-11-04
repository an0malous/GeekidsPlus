import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

const SelectLevel = ({ setGameLevel }) => (
    
    <div>
        <Container>
            <Grid>
                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('initial')} >Bronze - Initial Sounds</div>
                </Grid.Column>

                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('cvc')} >Silver - CVCs</div>
                </Grid.Column>

                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('cvcAdd')} >Silver - CVCsGold - CVC with easy blends</div>
                </Grid.Column>

                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('blends')} >Platnium - CVC with difficult blends</div>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
    );

export default SelectLevel;