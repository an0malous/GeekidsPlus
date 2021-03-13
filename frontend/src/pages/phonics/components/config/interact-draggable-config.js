import interact from 'interactjs';

interact('.draggable').draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrict({
        restriction: '.alphabet-container',
        endOnly: false,
      }),
    ],
    // enable autoScroll
    autoScroll: false,
  
    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
  
      // call this function on every dragend event
      end(event) {
     console.log('dragend', event)
      },
    },
  });
  
  function dragMoveListener(event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
  
    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";
  
    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  };