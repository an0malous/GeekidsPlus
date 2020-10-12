import React from "react";
import { shuffle } from "../../utils.js";
import Gameboard from "./components/Gameboard";
import axios from "axios";
import { SelectGameType } from './components/SelectGameType'
import { SelectGameLevel } from './components/SelectGameLevel'
import { SelectGameMode } from './components/SelectGameMode'
import { Switch, Route } from 'react-router-dom'
export default class GameController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inSession: false,
      alphabet: 0,
      dropzoneWord: [],
      currentImg: '',
      gameType: '',
      gameLevel: '',
      gameMode: '',
      displayNextRoundButton: false,
      displayDifficultWords: false,
    };
    this.currentWords = '';
    this.inSession = false;
    this.currentWordsIndexCounter = 0;
    this.init = this.init.bind(this);
    this.handleOnNextRound = this.handleOnNextRound.bind(this);
    this.handleOnFinalCheckCorrect = this.handleOnFinalCheckCorrect.bind(this);
    this.setGameType = this.setGameType.bind(this)
    this.setGameLevel = this.setGameLevel.bind(this);
    this.setGameMode = this.setGameMode.bind(this);
  }



  async loadWords (letter) {
    try {
     
        const response = await axios.get("http://localhost:3000/admin/cards")
        console.log("*********************** " + this.state.gameMode)
     
        if (this.state.gameMode === 'classic' && this.state.gameType === 'competitive'){
        this.currentWords = shuffle(response.data.filter(words=>words.type === this.state.gameLevel))
        } else if (this.state.gameMode === 'marathon'){
          this.currentWords = shuffle(response.data)
        } else {
          this.currentWords = shuffle(response.data.filter(words=>words.letter === this.state.gameMode))
        }
      } catch (err) {
        console.log(err)
      }
  }

  setGameLevel(level){
    this.setState({gameLevel: level})
  }

  setGameType(type){
    this.setState({gameType: type})
  }

  setAlphabetData() {
    const abc = []
    for(let i = 0; i < 26; i++){
        abc.push(String.fromCharCode(97 + i));
    }  
    if(this.currentWords[this.currentWordsIndexCounter].type === "blends"){
      abc.push(this.currentWords[this.currentWordsIndexCounter].letter);

  } 
    this.setState({
      alphabet: shuffle(abc),
    });
  }

  setDropzoneData() {
    const currentWord = [...this.currentWords[this.currentWordsIndexCounter].name];
    if (this.currentWords[this.currentWordsIndexCounter].type === "blends"){
      const blend = [...this.currentWords[0].letter];
      for(let i = 0; i < currentWord.length; i++){
          if(currentWord[i] === blend[0] && currentWord[i + 1] === blend[1] ){
              currentWord.splice(i, 2, this.currentWords[this.currentWordsIndexCounter].letter)
          }
        }
      }
    this.setState({
      dropzoneWord: currentWord
    });
  }

  setCurrentImgData() {
    this.setState({
      currentImg: this.currentWords[this.currentWordsIndexCounter].img
    });
  }

  //-- Game Controller Logic --\\

  async roundStart () {
    await this.loadWords();
    this.setDropzoneData();
    this.setAlphabetData();
    this.setCurrentImgData();
  };

  roundComplete = () => {
    
    this.currentWordsIndexCounter = this.currentWordsIndexCounter + 1;
    console.log(this.currentWordsIndexCounter)
  };

  init (mode) {
    this.setGameMode(mode)
    this.setState({inSession: true})
    this.lettersCorrectCounter = 0;
    this.roundStart();
   
  };

  setGameMode(mode){
    this.setState({gameMode: mode})
  }

  //-- React Handlers --\\
  handleOnNextRound = () => {
    this.setDropzoneData();
    this.setAlphabetData();
    this.setCurrentImgData();
    this.setState({
      displayNextRoundButton: !this.state.displayNextRoundButton
    });
  };

  handleOnFinalCheckCorrect = () => {
    console.log("ONE FINAL CHECK CORRECT ****************************************************")
    this.roundComplete();
    this.setState({
      displayNextRoundButton: !this.state.displayNextRoundButton,
    });
  };

  handleOnHelperClick = () => {
    this.props.handleSetOverlay();
  };

  render() {

    if(this.state.inSession){
      
      return(
        <div style={{marginTop: "-1rem"}} className="ui center aligned container">
             <Gameboard
               gameType={this.state.gameType}
               gameMode={this.state.gameMode}
               inSession={this.inSession}
               dropzoneWord={this.state.dropzoneWord}
               displayNextRoundButton={this.state.displayNextRoundButton}
               handleInit={this.handleInit}
               handleOnFinalCheckCorrect={this.handleOnFinalCheckCorrect}
               handleOnNextRound={this.handleOnNextRound}
               alphabet={this.state.alphabet}
               handleOnHelperClick={this.handleOnHelperClick}
               currentImg={this.state.currentImg}
             />
             </div>    
      )
    }

     
    return (
      
                <Switch>
            <Route exact path="/phonics">
                <SelectGameType setGameType={this.setGameType} />
            </Route>
            <Route exact path="/phonics/select-level">
                <SelectGameLevel setGameLevel={this.setGameLevel} />
            </Route>
            <Route exact path="/phonics/select-mode">
                <SelectGameMode gameType={this.state.gameType} setGameMode={this.setGameMode} gameLevel={this.state.gameLevel} init={this.init} />
            </Route>
        </Switch>
          
    )
  }
}