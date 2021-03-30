import React from 'react';
import { connect } from 'react-redux';
import interact from 'interactjs';
import { Grid } from 'semantic-ui-react';
import Dropzone from '../dropzone/dropzone.component';

import {
	onRoundComplete,
	onTimerStop,
	onLetterDrop,
} from '../../../../actions/phonicsGameActions';

const DropzoneContainer = ({ onRoundComplete, onTimerStop, onLetterDrop, timer, currentWordLetters, correctCounter }) => {

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
				ondrop: (event) => {
					event.stopImmediatePropagation();
					onLetterDrop(event)
				},

				ondropdeactivate: function (event) {
					// remove active dropzone feedback
					event.target.classList.remove('drop-active');
					event.target.classList.remove('drop-target');
					event.target.classList.remove('drop-target');
				}})

				if(correctCounter === currentWordLetters.length){
					clearInterval(timer.current)
					onTimerStop();
					onRoundComplete()
				}
	
	
		return (
			<Grid>
				<Grid.Row style={{ justifyContent: 'space-evenly' }}>
					{currentWordLetters.length > 1
						? currentWordLetters.map((zone) => (
								<Dropzone
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
	}

const mapStateToProps = (state) => ({
	currentWordLetters: state.phonicsGameReducer.currentWordLetters,
	correctCounter: state.phonicsGameReducer.correctCounter,
});

export default connect(mapStateToProps, {
	onRoundComplete,
	onTimerStop,
	onLetterDrop,
})(DropzoneContainer);
