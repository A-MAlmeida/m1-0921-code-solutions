
var $tabContainer = document.querySelector('.tab-container');

var $tabNodes = $tabContainer.querySelectorAll('.tab');

/* TEST WITH

console.log('Value of .tab node list: ', $tabNodes); */

var $viewContainer = document.querySelector('.view-container');

var $viewNodes = $viewContainer.querySelectorAll('.view ');

/* TEST WITH

console.log('Value of .view node list: ', $viewNodes); */

$tabContainer.addEventListener('click', function (event) {

  /* TEST WITH

  console.log('test: ', event.target) */

  if (event.target.matches('.tab')) {

    for (var i = 0; i < $tabNodes.length; i++) {
      if ($tabNodes[i] === event.target) {
        $tabNodes[i].className = 'tab active';
      } else {
        $tabNodes[i].className = 'tab';
      }
    }

    var attribute = event.target.getAttribute('data-view');

    /* TEST WITH

    console.log('date-view value: ', attribute); */

    for (var x = 0; x < $viewNodes.length; x++) {
      if ($viewNodes[x].getAttribute('data-view') === attribute) {
        $viewNodes[x].className = 'view';
      } else {
        $viewNodes[x].className = 'hidden';
      }
    }
  }

});
