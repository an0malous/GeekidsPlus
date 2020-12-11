import React from 'react';

import Dropzone from './dropzone.component';
import Interact from './interact-dropzone-config';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

const DropzoneContainer = ({ currentWordLetters }) => {
	console.log(currentWordLetters);
	const dropzones = currentWordLetters;

	return (
		<Interact>
			<Grid>
				<Grid.Row centered>
					{currentWordLetters.length > 1
						? dropzones.map((zone) => (
								<Dropzone
									key={zone}
									letter={zone}
									style={{
										color: 'red',
										fontSize: '1.5rem',
										padding: '25px',
										border: 'dotted black 2px',
									}}
									className="inner-dropzone"
								/>
						  ))
						: 'Loading Dropzone...'}
				</Grid.Row>
			</Grid>
		</Interact>
	);
};

const mapStateToProps = (state) => ({
	currentWordLetters: state.phonicsGameReducer.currentWordLetters,
});

export default connect(mapStateToProps)(DropzoneContainer);
