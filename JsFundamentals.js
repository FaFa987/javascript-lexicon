
let numbers = [1 , 2 , 3 , 4 , 5];

for(i=1 ; i <= numbers.length ; i++){
    /*if(i % 2 == 0 ){
        console.log(i + " is even")
    }else {
        console.log(i + " is odd")
    }*/

        const msg = i % 2 == 0 ? "Even" : "Odd";
        console.log(i , msg);
}

for (let i  of numbers) {

    const msg = i % 2 == 0 ? i + ": Even" : i + ": Odd";
    console.log(i , msg);
    
}

numbers.forEach( () => {} );

let person = { name: "Fateme" , age: "30" , isStudent: true};
let nullVar = null;
let description; //undefined
let sum = description + 30 //NaN
console.log(sum);

const API_URL = "https://google.com";
//API_URL = "https://github.com/"; // TypeError: Assignment to constant variable.

console.log(API_URL);

let day = "Monday";
day = "Sunday";

switch(day){
    case "Monday" :
    console.log("This is first of weekend")
    break;
    default:
    console.log("not sure")

}

let n1 = 10; //Number
let n2 = "10"; //String

// === used to check equal value and equal type
// == used to check equal value

let isEqual = n1 === n2;
let isEqualValue = n1 == n2;

console.log("Is Equal: " + isEqual);

function greet(message){
    console.log(message);
    //return message;
}
greet("Hi, Welcome to the Room");

const addition = (n1 , n2) => n1 + n2;
const _greet = message => console.log(message);

function calculate(n1 , n2 , operation){
    return operation(n1 , n2)
};
console.log(calculate(1,5, addition));

function dividision(n1, n2){
    if(n2 === 0){
        throw new Error("can not divide by zero");
        return n1 / n2
    }
}
//dividision(5,0);
try{
    console.log(dividision(5,0));
}catch(error){
    console.log("cought an Error: " , error.message)
}

let text = "Hello, World!";

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.indexOf("World"));
console.log(text.slice(0, 5));

let date = new Date();
console.log(date);

let nextLectureDate = new Date("2025-03-04T09:00:00");

