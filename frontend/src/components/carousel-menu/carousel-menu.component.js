import React, {useState} from 'react';
import { Container, Grid } from 'semantic-ui-react';

const CarouselMenu = ({ items, onClickItemTarget}) => {
    const [ currentItem, setCurrentItem ] = useState(0)
  
    return (
        <Container>
             <Grid 　textAlign='center'>
                 <Grid.Column>
                    <div onClick={currentItem !== 0 ? ()=>setCurrentItem(prevItem=>prevItem - 1) : null}>＜</div>
                 </Grid.Column>

                 <Grid.Column>
                     <div onClick={()=> onClickItemTarget(items[currentItem])}>{items[currentItem]}</div>
                 </Grid.Column>

                 <Grid.Column>
                 <div onClick={currentItem !== items.length - 1 ? ()=>setCurrentItem(prevItem=>prevItem + 1) : null}>＞</div>
                 </Grid.Column>
             </Grid>
        </Container>
    )
};

export default CarouselMenu;