//start of javascript
console.log('Hello world');



//arrays 
let selectedName = [
  {
    name: 'jemmy',
    height: '23',
    age: '45',
  },
  {
    name: 'sammie',
    height: '178',
    age: '56',
  },
  {
    name: 'jack',
    height: '78',
    age: '12',
  },
];

console.log(selectedName[1]);


//array length
const numbers = [2, 4, 5, 6];

console.log(numbers.length);


// array objects
// An array object is a collection of properties, where each property has a key (name) and value.
let person = new Object();
person.name = 'Daniel';
person.eyeColor= 'Blue';
person.age= 27;

console.log(person);


//object with function(method)
let person = new Object();
person.name = 'Daniel';
person.eyeColor = 'Blue';
person.age = 27;
person.updateAge = function () {
  return ++person.age;
}

console.log(person.updateAge());




//calculating the netpay 
let Bob = new Object();
Bob.payRate = '15%';
Bob.hours = 3500;
Bob.paySalary = 800000;
Bob.netSalary = function () {
  return Bob.paySalary * (1 - parseFloat(Bob.payRate) / 100);
}

console.log(Bob.netSalary());


//writting objects in a simple way 
let person = {
  name: 'Daniel',
  eyeColor: 'Blue',
  age: 27,
  updateAge: function () {
    return ++person.age;
  }
}

console.log(person.age);

