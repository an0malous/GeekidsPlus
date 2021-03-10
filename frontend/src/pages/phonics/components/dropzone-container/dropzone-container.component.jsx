import React, { useEffect, useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import interact from 'interactjs';
import Dropzone from '../dropzone/dropzone.component';
import { Grid } from 'semantic-ui-react';

import {
	onCorrectLetter,
	onRoundComplete,
	onTimerStop,
} from '../../../../actions/phonicsGameActions';

const DropzoneContainer = ({
	currentWordLetters,
	timer,
	onTimerStop,
	onCorrectLetter,
	onRoundComplete,
}) => {
	const [letters, setLetters] = useState([...currentWordLetters]);
	const [correctCounter, setCorrectCounter] = useState(0);

	const correctCounterRef = useRef(correctCounter);
	const lettersRef = useRef(letters);
	useEffect(() => {
	
		setCorrectCounter(0);
		setLetters([...currentWordLetters]);
		correctCounterRef.current = correctCounter;
		lettersRef.current = letters;
		interact('.inner-dropzone').dropzone(false)
		return ()=>{console.log('component unmounted')
}
	}
	, [currentWordLetters]);
	console.log('Dropzone Container Rendered');

	console.log(letters);
	console.log(correctCounter);
	console.log('lettersRef ', lettersRef.current);
	console.log('correctCounterRef ', correctCounter);
	const checkIfLetterIsCorrect = (event) => {
		for (let i = 0; i < lettersRef.current.length; i++) {
			console.log(event.target.textContent)
			console.log(letters);
			console.log(correctCounter);
			console.log('lettersRef ', lettersRef.current);
			console.log('correctCounterRef ', correctCounterRef.current);
			if (
				lettersRef.current[i] === event.relatedTarget.innerText &&
				event.relatedTarget.innerText === event.target.innerText
			) {
				onCorrectLetter();
				event.relatedTarget.classList.remove('draggable');
				event.relatedTarget.classList.add('correct');

				setCorrectCounter((prev) => prev + 1);

				if (lettersRef.current.length === correctCounterRef.current) {
					clearInterval(timer.current);
					
					onTimerStop();
					onRoundComplete();
					return;
				}
			}
		}
	};

	return (
		<Grid>
			<Grid.Row style={{ justifyContent: 'space-evenly' }}>
				{currentWordLetters.length > 1
					? currentWordLetters.map((zone) => (
							<Dropzone
							checkIfLetterIsCorrect={checkIfLetterIsCorrect}
								key={zone}
								letter={zone}
								style={{
									color: 'rgba(0,0,0,0)',
									width: '55px',
									height: '55px',
									border: 'dotted white 2px',
								}}
								className="inner-dropzone"
							/>
					  ))
					: 'Loading Dropzone...'}
			</Grid.Row>
		</Grid>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onRoundComplete: () => dispatch(onRoundComplete()),
	onCorrectLetter: () => dispatch(onCorrectLetter()),
	onTimerStop: () => dispatch(onTimerStop()),
});

const mapStateToProps = (state) => ({
	currentWordLetters: state.phonicsGameReducer.currentWordLetters,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneContainer);
