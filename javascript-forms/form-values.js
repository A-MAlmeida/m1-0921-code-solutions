var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function () {

  event.preventDefault();

  var name = $form.elements.name.value;
  var email = $form.elements.email.value;
  var message = $form.elements.message.value;

  var formInfo = {
    name: name,
    email: email,
    message: message
  };

  console.log(formInfo);

});
