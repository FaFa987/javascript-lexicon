
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
API_URL = "https://github.com/";

console.log(API_URL);