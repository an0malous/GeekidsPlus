import React from 'react'
import Timer from './Timer'
import { Points}  from './Points'
import { Dropzone } from './Dropzone'
import { Interact } from './Interact'
import { Alphabet } from './Alphabet'
import { RoundBreakdown } from './RoundBreakdown'
import { Thumbnail } from './Thumbnail'
import { Button } from './Button';

export default class Gameboard extends React.Component {
    constructor(props){
        super(props)
        this.totalPoints = 0;
        this.lettersCorrectCounter = 0;
        this.checkCorrect = this.checkCorrect.bind(this)
    }

    updateDifficultLetters (index) {
        let regex = this.props.dropzoneWord[index]
        let deleteIndex = new RegExp(regex, "g")
        this.props.difficultLetters.splice(deleteIndex)
        console.log("current difficult letters " + this.props.difficultLetters)

     }
 
     checkCorrect (event) {
         for(let i = 0; i < this.props.dropzoneWord.length; i++){
             if (this.props.dropzoneWord[i] === event.relatedTarget.textContent && 
                event.relatedTarget.textContent === event.target.textContent &&
                !event.target.classList.contains("checkedCorrect")
               ){
                       
                     event.target.classList.add("checkedCorrect");
                     this.updateDifficultLetters(i)
                     event.relatedTarget.classList.remove('draggable');
                     this.lettersCorrectCounter = this.lettersCorrectCounter + 1
                     console.log(this.lettersCorrectCounter)
             }
         }
         if( this.props.dropzoneWord.length === this.lettersCorrectCounter ){
             this.pointCalc(this.props.dropzoneWord)
             this.lettersCorrectCounter = 0;
             this.props.handleOnFinalCheckCorrect()
         }
     }
 
     pointCalc = (dropzoneWord) => {  
         this.bonus = 6;
         this.round = Math.floor(dropzoneWord.length * 5 + this.bonus)
         this.totalPoints = this.totalPoints + this.round
         console.log("you have " + this.totalPoints)
     }

    render(){
        if(this.props.displayNextRoundButton){
            return (
                <div>
                    <RoundBreakdown handleOnNextRound={this.props.handleOnNextRound} roundPoints={this.round}/>
                </div>
            )
        }
        return (
            <div>
                <div style={{background: "orange", border: "solid black 1px", borderRadius: 15}} className="ui horizontal segments">
                <div style={{border: "solid black 0px", borderRadius: 15, background: "orange"}} className="ui segment">
                    {this.props.inSession && <Timer />}
                </div>
                <div style={{background: "#333333"}} className="ui segment">
                    <button className="ui button" onClick={this.props.handleInit}>Start Game</button>
                    <Thumbnail source={this.props.currentImg} standardWidth="150px" standardHeight="100px" />
                
                </div>
                <div style={{background: "orange", border: "solid black 0px", borderRadius: 15}}className="ui segment">
                    {this.props.inSession && <Button label='Helper' handler={this.props.handleOnHelperClick} />}
                </div>
            </div>

{this.props.inSession && 
    <Interact checkCorrect={ this.checkCorrect }>
        <Dropzone dropzoneWord={this.props.dropzoneWord} />
        <Alphabet difficultLetters={this.props.difficultLetters} alphabet={this.props.alphabet} />
    </Interact>}
    </div>
    
        )
    }
}

