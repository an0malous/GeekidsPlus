import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { shuffle } from '../../../utils';
import './interact-draggable-config';
import AlphabetCard from './alphabet-card.component';
import { Grid } from 'semantic-ui-react';
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
		if (currentWord.type === 'blends') {
			abcArr.push(currentWord.letter);
			setAlphabet(shuffle(abcArr));
		} else {
			console.log(alphabet)
			setAlphabet(shuffle(abcArr));
			
		}
		return function alphabetCardCleanUp() {
			setAlphabet([]);
		};
	}, [currentDeckIndex, currentWord]);

	return (
		<Grid>
			<Grid.Row centered>
				{alphabet.length > 0
					? alphabet.map(cardLetter => (
							<AlphabetCard
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

const mapStateToProps = (state) => ({
	currentWords: state.phonicsGameReducer.currentWords,
	currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
});

export default connect(mapStateToProps)(AlphabetContainer);
