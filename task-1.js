// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

let string  = "hello world"

const revereStr = () => {

    let reverseString = "";

    for(let i= string.length -1; i>=0; i--){
        reverseString += string[i]; 
    }

    return reverseString;
}

const rStr = revereStr();
console.log(rStr)