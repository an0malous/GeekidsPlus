import React, {useState} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const CarouselMenu = ({ items, onClickItemTarget }) => {
    const [ currentItem, setCurrentItem ] = useState(0)
  
    return (
       
             <Grid centered={true} verticalAlign="middle" >
                 <Grid.Column >
                    <Icon onClick={currentItem !== 0 ? ()=>setCurrentItem(prevItem=>prevItem - 1) : null} fitted={true} name="angle double left" />
                 </Grid.Column>

                 <Grid.Column  width={12}>
                     {onClickItemTarget ? (<div onClick={()=> onClickItemTarget(items[currentItem])}>{items[currentItem]}</div>): (<div>{items[currentItem]}</div>)}
                 </Grid.Column>

                 <Grid.Column >
                 <Icon onClick={currentItem !== items.length - 1 ? ()=>setCurrentItem(prevItem=>prevItem + 1) : null} fitted={true} name="angle double right" />
                 </Grid.Column>
             </Grid>
      
    )
};

export default CarouselMenu;