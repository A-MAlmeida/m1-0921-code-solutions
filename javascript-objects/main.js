var student = { firstName: 'Andrew', lastName: 'Almeida', age: 29 };

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Optician';

console.log('livesinIrvine value:', student.livesInIrvine);
console.log('previousOccupation value:', student.previousOccupation);

var vehicle = { make: 'Rolls-Royce', model: 'Cullinan', year: 2020 };

vehicle['color'] = 'Matte White';
vehicle['isConvertible'] = 'false';

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);

console.log('new set of wheels:', vehicle);

var pet = { name: 'Douglas', type: 'Dog' };

console.log('testing', pet);

delete pet.name;
delete pet.type;

console.log('testing deleting skills:', pet);

console.log("that's a bingo!");
