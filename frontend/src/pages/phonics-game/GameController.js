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
    this.handleInit = this.handleInit.bind(this);
    this.handleOnNextRound = this.handleOnNextRound.bind(this);
    this.handleOnFinalCheckCorrect = this.handleOnFinalCheckCorrect.bind(this);
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

  setAlphabetData() {
    this.setState({
      alphabet: shuffle([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ]),
    });
  }

  setDropzoneData() {
    this.setState({
      dropzoneWord: [...this.currentWords[this.currentWordsIndexCounter].name]
    });
    console.log(this.state.dropzoneWord + " INSIDE DROPZONE DATA")
  }

  setCurrentImgData() {

    this.setState({
      currentImg: this.currentWords[this.currentWordsIndexCounter].img
    });
  }

  //-- Game Controller Logic --\\

  async roundStart (letter) {
    await this.loadWords(letter);
    console.log("INSIDE ROUND START")
    this.setDropzoneData();
    this.setAlphabetData();
    this.setCurrentImgData();
  };

  roundComplete = () => {
    this.currentWordsIndexCounter = this.currentWordsIndexCounter + 1;
  };

  init (letter) {
    this.setState({inSession: true})
    this.lettersCorrectCounter = 0;
    
    this.roundStart(letter);
   
  };

  //-- React Handlers --\\
  handleInit = (letter) => {
    this.init(letter);
  };

  handleOnNextRound = () => {
    this.roundStart();
    this.setState((state) => ({
      displayNextRoundButton: !this.state.displayNextRoundButton,
    }));
  };

  handleOnFinalCheckCorrect = () => {
    this.roundComplete();
    this.setState((state) => ({
      displayNextRoundButton: !this.state.displayNextRoundButton,
    }));
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
                <SelectGameLevel />
            </Route>
            <Route exact path="/phonics/select-mode">
                <SelectGameMode  init={this.handleInit} />
            </Route>
        </Switch>
              )
              }
        </div>

    )
  }
}