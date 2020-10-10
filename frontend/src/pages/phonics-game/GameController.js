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
    this.setGameLevel = this.setGameLevel.bind(this);
  }

  async loadWords (letter) {
    try {
      console.log(letter)
        const response = await axios.get("http://localhost:3000/admin/cards")
        console.log(response.data)
        this.currentWords = response.data.filter(words=>words.letter === letter)
 
      } catch (err) {
        console.log(err)
      }
  }

  setGameLevel(level){
    this.setState({gameLevel: level})
  }
  
  setAlphabetData() {
    const abc = []
    for(let char = 0; char < 26; i++){
        abc.push(97 + i);
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

  async roundStart (letter) {
    await this.loadWords(letter);
    this.setDropzoneData();
    this.setAlphabetData();
    this.setCurrentImgData();
  };

  roundComplete = () => {
    
    this.currentWordsIndexCounter = this.currentWordsIndexCounter + 1;
    console.log(this.currentWordsIndexCounter)
  };

  init (letter) {
    this.setState({inSession: true})
    this.lettersCorrectCounter = 0;
    this.roundStart(letter);
   
  };

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
    this.roundComplete();
    this.setState({
      displayNextRoundButton: !this.state.displayNextRoundButton,
    });
  };

  handleOnHelperClick = () => {

    this.props.handleSetOverlay();
  };

  render() {

    return (
  
      <div style={{marginTop: "-1rem"}} className="ui center aligned container">
              {this.state.inSession ? (<Gameboard
                inSession={this.inSession}
                dropzoneWord={this.state.dropzoneWord}
                displayNextRoundButton={this.state.displayNextRoundButton}
                handleInit={this.handleInit}
                handleOnFinalCheckCorrect={this.handleOnFinalCheckCorrect}
                handleOnNextRound={this.handleOnNextRound}
                alphabet={this.state.alphabet}
                handleOnHelperClick={this.handleOnHelperClick}
                currentImg={this.state.currentImg}
              />) : (
                <Switch>
            <Route exact path="/phonics">
                <SelectGameType />
            </Route>
            <Route exact path="/phonics/select-level">
                <SelectGameLevel setGameLevel={this.setGameLevel} />
            </Route>
            <Route exact path="/phonics/select-mode">
                <SelectGameMode gameLevel={this.state.gameLevel} init={this.init} />
            </Route>
        </Switch>
              )
              }
        </div>

    )
  }
}