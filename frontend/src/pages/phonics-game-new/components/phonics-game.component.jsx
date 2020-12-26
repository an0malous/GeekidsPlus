



import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import DropzoneContainer from './dropzone-container.component';
import AlphabetContainer from './alphabet-container.component'
import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import RoundBreakdown from '../../../components/round-breakdown/round-breakdown';
import { fetchCurrentWordsAsync, onRoundComplete, onGameStart, onRoundStart } from '../../../actions/phonicsGameActions';
import { connect } from 'react-redux';

const PhonicsGame = ({ openRoundBreakdown }) => {
  const [open, setOpen] = React.useState(true)


  return (
    <Modal
      closeOnEscape={false}
      closeOnDimmerClick={false}
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
    >
      <Header icon>
        
        Phonics
      </Header>
      <Modal.Content>
      <div>
        {openRoundBreakdown ? <RoundBreakdown /> : null }
        <GameDashboard />
        <DropzoneContainer />
        <AlphabetContainer />
    </div>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> End Game
        </Button>
      </Modal.Actions>
    </Modal>
  )
};

const mapStateToProps = state => ({
    isFetching: state.phonicsGameReducer.isFetching,
    fetchSuccessful: state.phonicsGameReducer.currentWords,
    openRoundBreakdown: state.phonicsGameReducer.openRoundBreakdown
});


export default connect(mapStateToProps)(PhonicsGame);
