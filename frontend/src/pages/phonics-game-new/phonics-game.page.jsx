import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PhonicsGameContainer from './components/phonics-game.container';
import { connect } from 'react-redux';
import { onGameEnd } from '../../actions/phonicsGameActions';

const PhonicsGamePage = ({ onGameEnd }) => {
	const [open, setOpen] = useState(true);
	return (
		<Modal
			basic
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			size="small"
		>
			<Header icon>Phonics</Header>
			<Modal.Content>
				<PhonicsGameContainer />
			</Modal.Content>
			<Modal.Actions>
				<Button
					basic
					color="red"
					inverted
					onClick={() => {
						setOpen(false);
						onGameEnd();
					}}
				>
					<Icon name="remove" /> Exit Phonics
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onGameEnd: () => dispatch(onGameEnd()),
});

export default connect(null, mapDispatchToProps)(PhonicsGamePage);
