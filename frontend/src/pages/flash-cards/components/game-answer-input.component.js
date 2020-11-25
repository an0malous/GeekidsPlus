import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const GameAnswerInput = () => {

    return (
        <Container>
            <Grid>
            <Grid.Column>
          <button >I know it!</button>
          </Grid.Column>

          <Grid.Column>
          <button >I need to study this for later</button>  
          </Grid.Column>
          
           
          </Grid>
        </Container>
    )
};

export default GameAnswerInput;