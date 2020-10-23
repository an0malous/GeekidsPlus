import interact from 'interactjs';

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
      console.log("dropped");
      console.log(event);
      {
        props.checkCorrect(event);
      }
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
      event.target.classList.remove("drop-target");
    },
  });