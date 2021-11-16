
var $buttonClick = document.querySelector('.open-button');

var $openModal = document.querySelector('.modal-content');

$buttonClick.addEventListener('click', function () {

  $openModal.className = 'open-modal';

});
