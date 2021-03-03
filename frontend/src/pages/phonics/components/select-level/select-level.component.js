import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';

const SelectLevel = ({ setGameLevel }) => (
    
    <div>
   
        <Container>
   
        <Header as="h2" attached={true} style={{backgroundColor: "rgb(223,181,7)"}}>Phonics</Header>
            <Grid>
                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('initialSounds')} ><header as="h3">Bronze - Initial Sounds</header></div>
                </Grid.Column>

                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('cvc')} ><header as="h3">Silver - CVCs</header></div>
                </Grid.Column>

                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('cvcAdd')} ><header as="h3">Gold - CVC with easy blends</header></div>
                </Grid.Column>

                <Grid.Column width={4}>
                    <div onClick={()=>setGameLevel('blends')} ><header as="h3">Platnium - CVC with difficult blends</header></div>
                </Grid.Column>
            </Grid>
       
        </Container>
    </div>
    );

export default SelectLevel;