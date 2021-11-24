/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javscript-local-storage');

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function (event) {

  var todosJSON = JSON.stringify(todos);

  localStorage.setItem('javscript-local-storage', todosJSON);

});
