
let numbers = [1, 2, 3, 4];

console.log(numbers[2]); // 3
console.log(numbers[20]); // undefined

numbers.push(8);
numbers.push(5, 6, 7);

numbers.pop();
// console.log(numbers); // [1, 2, 3, 4, 8, 5, 6]
numbers = [1, 2, 3, 4];

const filteredArray = numbers.filter (n => n % 2 == 0);
console.log(filteredArray);

const squaredNumbers = numbers.map((n) => n * n);
console.log(squaredNumbers);

numbers.forEach( num => console.log(num));




