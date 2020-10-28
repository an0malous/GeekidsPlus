import interact from 'interactjs';

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { onRoundComplete } from '../../../actions/phonicsGameActions'

const Interact = ({ children, onRoundComplete, currentWord }) => {


  


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
      event.target.classList.add("dropped")
      event.stopImmediatePropagation()
      console.log("************************ DROPPED")
    

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
  onRoundComplete: ()=>dispatch(onRoundComplete()),
});

const mapStateToProps = state => ({
  currentWord: state.phonicsGameReducer.currentWord
})

export default connect(mapStateToProps, mapDispatchToProps)(Interact);