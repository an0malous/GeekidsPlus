import React from 'react';
import Dropzone from '../dropzone/dropzone.component';
import Interact from '../interact-dropzone-config';
import { Grid } from 'semantic-ui-react';

const DropzoneContainer = ({ currentWordLetters, timer }) => {
	
	const dropzones = currentWordLetters;

	return (
		<Interact timer={timer}>
			<Grid>
				<Grid.Row style={{justifyContent: 'space-evenly'}}>
					{currentWordLetters.length > 1
						? dropzones.map((zone) => (
								<Dropzone
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
		</Interact>
	);
};

export default DropzoneContainer;