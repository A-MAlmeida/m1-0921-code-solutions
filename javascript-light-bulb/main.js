var $background = document.querySelector('.container');

var $lightSwitch = document.querySelector('.light-bulb');

var clickCount = 1;


$lightSwitch.addEventListener('click', function () {

  clickCount++;

  if (clickCount % 2 === 0) {

    $background.className = 'container-on';
    $lightSwitch.className = 'light-bulb-on';
    } else {
    $background.className = 'container';
    $lightSwitch.className = 'light-bulb';

});
