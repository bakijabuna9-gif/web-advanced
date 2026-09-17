//ARRAYS
//Data types ['','','']

var programmingLanguages = ['Javascript', 'PHP' ,'Python'];

console.log(programmingLanguages)

console.log(programmingLanguages[0])
console.log(programmingLanguages[1])
console.log(programmingLanguages[2])

programmingLanguages.push('Java');
console.log(programmingLanguages)

programmingLanguages.pop();
console.log(programmingLanguages)

programmingLanguages.unshift('C#');
console.log(programmingLanguages)

programmingLanguages.shift();
console.log(programmingLanguages)

programmingLanguages.splice(0,2, 'Ruby');
console.log(programmingLanguages)

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var places = ["London", "Paris", "New York", "Berlin"]
//destrukturimi

var [firstPlace, secondPlace, thirdPlace] = places;
console.log(thirdPlace);

var numbers = [1,2,3,4,5,6,7,8,9,10]

var [firstnumber,secondNumber, ...otherNumbers] = numbers;

console.log(firstnumber)
console.log(secondNumber)
console.log(otherNumbers.toString())


var friends = ["Arta", "Era", "Sara" , "Lea", "Morea"]
console.log(friends[2]);


var numbers = [1, 2, 3, 4 , 5];
numbers.push(6);
numbers.shift();
numbers.splice(1, 0, 10);
console.log(numbers);


var places = ["London", "Paris", "New York", "Berlin", "Prishtina"]
var randomIndex = Math.floor(Math.random() * places.legth);
var [firstPlace, secondPlace, thirdPlace] = places;
var [selectPlace] = places.slice(randomIndex, randomIndex + 1);
console.log(selectPlace); 