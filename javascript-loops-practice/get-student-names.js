/* exported getStudentNames */

function getStudentNames(students) {

  var nameList = [];

  for (var i = 0; i < students.length; i++) {
    nameList.push(students[i].name);
  }
  return nameList;
}
