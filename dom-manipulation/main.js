var clickCount = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

console.log('hot-button value: ', $hotButton);

console.log('click-count value: ', $clickCount);

$hotButton.addEventListener('click', function () {

  clickCount++;
  var temperature;

  if (clickCount < 4) {
    temperature = 'cold';
  } else if (clickCount < 7) {
    temperature = 'warm';
  } else if (clickCount < 10) {
    temperature = 'tepid';
  } else if (clickCount < 13) {
    temperature = 'warm';
  } else if (clickCount < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }

  $hotButton.className = 'hot-button ' + temperature;

  $clickCount.textContent = 'Clicks: ' + clickCount;

});
