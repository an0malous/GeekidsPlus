import React, { useEffect, useState } from 'react';
import { shuffle } from '../../../../utils';
import '../config/interact-draggable-config';
import AlphabetCard from '../alphabet-card/alphabet-card.component';
import { Grid } from 'semantic-ui-react';
import {cacheImages} from '../../../../utils'
const AlphabetContainer = ({ currentWords, currentDeckIndex }) => {
	const [alphabet, setAlphabet] = useState([]);
	const currentWord = currentWords[currentDeckIndex];
	useEffect(() => {
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
		
	const nextWord = [require(`../../../../asssets/words${currentWords[currentDeckIndex + 1].img}`)]
	cacheImages(nextWord);
const backsideImgs = []
		for(let letter of abcArr){
			backsideImgs.push(require(`../../../../asssets/abcs/${letter}.jpg`))
		}

		cacheImages(backsideImgs)
		if (currentWord.type === 'blends') {
			abcArr.push(currentWord.letter);
			setAlphabet(shuffle(abcArr));
		} else {
			setAlphabet(shuffle(abcArr));

		}

		return ()=> {
			
				setAlphabet([]); 
			}
				
	
	}, [currentWord]);
	
	return (
	
		<Grid style={{marginTop: 0}}>
		
			<Grid.Row centered>
	
				{alphabet.length > 0
					? alphabet.map(cardLetter => (
						<AlphabetCard
						style={{width: "55px", height: "65px"}}
						animatedStyles={{width: "55px", height: "65px", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", fontSize:"2.5rem", border: "1px solid black", color: "red", borderRadius: "15%", backgroundColor: "white"}}
						currentDeckIndex={currentDeckIndex}
						data-testid="alphabet-card"
							key={cardLetter}
							letter={cardLetter}
							className="draggable"
						/>
					
				
					))
					: 'Loading Alphabet Cards...'}
					
			</Grid.Row>
		
		</Grid>
		
	);
	
};




export default AlphabetContainer;
