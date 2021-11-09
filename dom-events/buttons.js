console.log('Hello, dom-events');

function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target: ', $button);
}

var $button = document.querySelector('.click-button');

$button.addEventListener('click', handleClick, false);

console.log('this is a test hello, hello');

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', $hover);
}

var $hover = document.querySelector('.hover-button');

$hover.addEventListener('mouseover', handleMouseover, false);

console.log('all is well');

function handleDoubleClick() {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', $dblClick);
}

var $dblClick = document.querySelector('.double-click-button');

$dblClick.addEventListener('dblclick', handleDoubleClick, false);
