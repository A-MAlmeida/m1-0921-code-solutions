var $listClick = document.querySelector('.task-list');

function handleEvent(event) {

  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.nodeName === 'BUTTON') {

    var closest = event.target.closest('.task-list-item');

    console.log('.task-list-item: ', closest);
    closest.remove();

  }

}

$listClick.addEventListener('click', handleEvent);
