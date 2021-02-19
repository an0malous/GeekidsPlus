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
	const [correctCounter, setCorrectCounter] = useState(2);
	const [letters, setLetters] = useState(currentWordLetters);
	const [dropzones, setDropzones] = useState([]);

	let lettersRef = useRef(letters);
	let correctCounterRef = useRef(correctCounter);

	useEffect(() => {
		setLetters(currentWordLetters);
		setCorrectCounter(0);
		setDropzones([]);
	
	}, [currentWordLetters]);
	
	const handleDropzones = useCallback((payload) => {
		return setDropzones((prev) => [...prev, payload.current]);
	}, [setDropzones])

	lettersRef.current = letters;
	correctCounterRef.current = correctCounter;
	const checkIfLetterIsCorrect = (
		event,
		{ lettersRef, correctCounterRef, dropzones }
	) => {
		
		for (let i = 0; i < lettersRef.current.length; i++) {
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
				}
			}
		}
	};

	// enable draggables to be dropped into this
	interact('.inner-dropzone').dropzone({
		// only accept elements matching this CSS selector
		accept: '.draggable',
		// Require a 75% element overlap for a drop to be possible
		overlap: 0.75,

		// listen for drop related events:

		ondropactivate: function (event) {
			// add active dropzone feedback
			event.target.classList.add('drop-active');
		},
		ondragenter: function (event) {
			var draggableElement = event.relatedTarget;
			var dropzoneElement = event.target;

			// feedback the possibility of a drop
			dropzoneElement.classList.add('drop-target');
			draggableElement.classList.add('can-drop');
			//draggableElement.textContent = 'Dragged in'
		},
		ondragleave: function (event) {
			// remove the drop feedback style

			event.target.classList.remove('correct');
			event.target.classList.remove('incorrect');
			event.target.classList.remove('drop-target');
			event.relatedTarget.classList.remove('can-drop');
			event.target.classList.remove('test');
			//event.relatedTarget.textContent = 'Dragged out'
		},
		ondrop: function (event) {
			event.stopImmediatePropagation();
			checkIfLetterIsCorrect(event, {
				correctCounterRef,
				lettersRef,
				dropzones,
			});
		},

		ondropdeactivate: function (event) {
			// remove active dropzone feedback
			event.target.classList.remove('drop-active');
			event.target.classList.remove('drop-target');
			event.target.classList.remove('drop-target');
		},
	});

	return (
		<Grid>
			<Grid.Row style={{ justifyContent: 'space-evenly' }}>
				{currentWordLetters.length > 1
					? currentWordLetters.map((zone) => (
							<Dropzone
								handleDropzones={handleDropzones}
								key={zone}
								letter={zone}
								style={{
									color: 'rgba(0,0,0,0)',
									fontSize: '1.5rem',
									padding: '25px',
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
