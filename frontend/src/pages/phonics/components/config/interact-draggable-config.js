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
			const { target } = event;

			if (target.classList.contains('draggable')) {
				target.style.webkitTransform = target.style.transform =
					'translate(' + 0 + 'px, ' + 0 + 'px)';
				target.setAttribute('data-x', 0);
				target.setAttribute('data-y', 0);
			}
		},
	},
});

function dragMoveListener(event) {
  const { target } = event;
	// keep the dragged position in the data-x/data-y attributes
	const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	// translate the element
	target.style.webkitTransform = target.style.transform =
		'translate(' + x + 'px, ' + y + 'px)';

	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}
