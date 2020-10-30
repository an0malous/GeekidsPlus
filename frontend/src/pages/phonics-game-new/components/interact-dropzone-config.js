import interact from 'interactjs';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { stopTimerAsync, onRoundComplete } from '../../../actions/phonicsGameActions'

const Interact = ({ children, onRoundComplete, currentWords, currentDeckIndex }) => {
  const [correctCounter, incrementCorrectCounter] = useState(0);
  const letters = [...currentWords[currentDeckIndex].name];
  useEffect(()=>{
    console.log("UPDATED")
    if( letters.length === correctCounter ){
      console.log("CORRECT COUNTER ON COMEPLTE", correctCounter)
      console.log("LETTERS LENGTH", letters.length)
       stopTimerAsync()
       onRoundComplete()
    };
  }, [correctCounter])
  

  const letterCorrect = (event) => {
    for(let i = 0; i < letters.length; i++){
        if (letters[i] == event.relatedTarget.innerText && 
            event.relatedTarget.innerText == event.target.innerText){
             console.log(currentDeckIndex, "DECK INDEX")
                event.target.classList.add("checkedCorrect");
                event.relatedTarget.classList.remove('draggable');
                incrementCorrectCounter(prevState=>prevState + 1)
        }
    }
  }
  


// enable draggables to be dropped into this
interact(".inner-dropzone").dropzone({
    // only accept elements matching this CSS selector
    accept: ".draggable",
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add("drop-active");
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add("drop-target");
      draggableElement.classList.add("can-drop");
      //draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      // remove the drop feedback style
  
      event.target.classList.remove("correct");
      event.target.classList.remove("incorrect");
      event.target.classList.remove("drop-target");
      event.relatedTarget.classList.remove("can-drop");
      event.target.classList.remove("test");
      //event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      event.stopImmediatePropagation();

      event.target.classList.add("dropped")
      letterCorrect(event);
  
  
    },
   
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
      event.target.classList.remove("drop-target");
    },
  })

  return (
    <div >
      {children}
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  stopTimerAsync: ()=>dispatch(stopTimerAsync()),
  onRoundComplete: ()=>dispatch(onRoundComplete())
});

const mapStateToProps = state => ({
  currentWords: state.phonicsGameReducer.currentWords,
  currentDeckIndex: state.phonicsGameReducer.currentDeckIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(Interact);