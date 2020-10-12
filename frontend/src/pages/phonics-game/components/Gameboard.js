import React, { Fragment } from "react";
import Timer from "./Timer";
import { Points } from "./Points";
import { Dropzone } from "./Dropzone";
import { Interact } from "./Interact";
import { Alphabet } from "./Alphabet";
import { RoundBreakdown } from "./RoundBreakdown";
import { Thumbnail } from "./Thumbnail";
import { Button } from "./Button";

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state ={totalSeconds: 0}
    this.totalPoints = 0;
    this.lettersCorrectCounter = 0;
    this.checkCorrect = this.checkCorrect.bind(this);
    this.tick = this.tick.bind(this)
    this.interval = undefined;
  }

  componentDidMount () {
    if(this.props.gameMode === 'classic'){
      this.setState({totalSeconds: 600})
    }
   this.interval = setInterval (this.tick, 1000)
   
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  checkCorrect(event) {
    for (let i = 0; i < this.props.dropzoneWord.length; i++) {
      if (
        this.props.dropzoneWord[i] === event.relatedTarget.textContent &&
        event.relatedTarget.textContent === event.target.textContent &&
        !event.target.classList.contains("checkedCorrect")
      ) {
        event.target.classList.add("checkedCorrect");

        event.relatedTarget.classList.remove("draggable");
        this.lettersCorrectCounter = this.lettersCorrectCounter + 1;
        console.log(this.lettersCorrectCounter);
      }
    }
    if (this.props.dropzoneWord.length === this.lettersCorrectCounter) {
      this.pointCalc(this.props.dropzoneWord);
      this.lettersCorrectCounter = 0;
      this.props.handleOnFinalCheckCorrect();
    }
  }

  tick = () => {
    console.log("tick")
       if(this.props.gameMode === 'classic'){
           this.setState({totalSeconds: this.state.totalSeconds - 1}) 
       } else {
            this.setState({totalSeconds: this.state.totalSeconds + 1})
       }
   }

  pointCalc = (dropzoneWord) => {
    this.bonus = 6;
    this.round = Math.floor(dropzoneWord.length * 5 + this.bonus);
    this.totalPoints = this.totalPoints + this.round;
    console.log("you have " + this.totalPoints);
  };

  render() {
    return (

      this.props.displayNextRoundButton ? (
      
        <RoundBreakdown
          handleOnNextRound={this.props.handleOnNextRound}
          roundPoints={this.round}
        />
     ) : (
       
      <div style={{ height: "100%" }} className="ui grid center aligned container">
        <div
          style={{
            background: "orange",
            border: "solid black 1px",
            borderRadius: 15,
          }}
          className="ui horizontal segments"
        >
          <div
            style={{
              border: "solid black 0px",
              borderRadius: 15,
              background: "orange",
            }}
            className="ui segment"
          >
            <Timer tick={this.tick} totalSeconds={this.state.totalSeconds}/>
          </div>
          <div style={{ background: "#333333" }} className="ui segment">
            <Thumbnail
              source={this.props.currentImg}
              standardWidth="150px"
              standardHeight="100px"
            />
          </div>
          <div
            style={{
              background: "orange",
              border: "solid black 0px",
              borderRadius: 15,
            }}
            className="ui segment"
          >
            <Button label="Helper" handler={this.props.handleOnHelperClick} />
            </div>
          </div>
          <Interact checkCorrect={this.checkCorrect}>
            <Dropzone dropzoneWord={this.props.dropzoneWord} />
            <Alphabet alphabet={this.props.alphabet} />
          </Interact>
          </div>)
    );
  }
}
