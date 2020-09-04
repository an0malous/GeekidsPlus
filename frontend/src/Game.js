import React from "react";
import { shuffle } from "./utils.js";
import Gameboard from "./components/game.components/Gameboard";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { SelectGameType } from "./components/game.components/SelectGameType";
import { SelectGameLevel } from './components/game.components/SelectGameLevel'
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: 0,
      dropzoneWord: "",
      currentImg: "",
      displayNextRoundButton: false,
      displayDifficultWords: false,
    };
    this.inSession = false;
    this.currentWordsIndexCounter = 0;
    this.handleInit = this.handleInit.bind(this);
    this.handleOnNextRound = this.handleOnNextRound.bind(this);
    this.handleOnFinalCheckCorrect = this.handleOnFinalCheckCorrect.bind(this);
  }
  componentDidMount(){
    this.props.handleSetOverlay();
  }

  async loadWords () {
    try {
        const response = await axios.get("http://localhost:3000/cards")
        console.log(response.data)
        this.currentWords = response.data
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
      dropzoneWord: [...this.currentWords[this.currentWordsIndexCounter].name],
    });
  }

  setCurrentImgData() {
    this.setState({
      currentImg: this.currentWords[this.currentWordsIndexCounter].img,
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
  };

  init = () => {
    this.lettersCorrectCounter = 0;
    this.roundStart();
    this.inSession = !this.inSession;
  };

  //-- React Handlers --\\
  handleInit = () => {
    this.init();
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
     
      <div className="ui center aligned grey container">
       
              <Gameboard
                inSession={this.inSession}
                dropzoneWord={this.state.dropzoneWord}
                displayNextRoundButton={this.state.displayNextRoundButton}
                difficultLetters={this.difficultLetters}
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
}