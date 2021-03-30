import React from 'react';
import AlphabetCard from '../../spelling/components/alphabet-card/alphabet-card.component'
import { Grid } from 'semantic-ui-react';
const Practice = () => {
	const abcArr = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	return (
      <Grid style={{marginTop: 0}}>
		
      <Grid.Row centered>

         {abcArr.length > 0
            ? abcArr.map(cardLetter => (
               <AlphabetCard
                  animatedStyles={{width: "75px", height: "95px", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", fontSize:"2.5rem", border: "1px solid black", color: "red", borderRadius: "15%", backgroundColor: "white"}}
                  style={{width: "75px", height: "95px"}}
                  key={cardLetter}
                  letter={cardLetter}
              
               />
            
         
            ))
            : null}
            
      </Grid.Row>
   
   </Grid>
	);
};

export default Practice;