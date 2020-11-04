import React, {useState} from 'react';
import { Container, Grid } from 'semantic-ui-react';

const CarouselMenu = ({ items, ...rest }) => {
    const [ currentItem, setCurrentItem ] = useState('')

    return (
        <Container>
             <Grid>
                 <Grid.Column>
                    <div　onClick={setCurrentItem(prevItem=>items[prevItem - 1])}> ＞ </div>
                 </Grid.Column>

                 <Grid.Column>
                     <div {...rest}>{currentItem}</div>
                 </Grid.Column>

                 <Grid.Column>
                 <div onClick={setCurrentItem(prevItem=>items[prevItem + 1])}> ＜ </div>
                 </Grid.Column>
             </Grid>
        </Container>
    )
};

export default CarouselMenu;