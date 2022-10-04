// let  x = myFunction(4, 3);
// function myFunction(a, b) {
//     // Return the product of a and b
//    console.log(a*b) 
//   }

/* Write a function that accepts a number as an argument
alert the user whether the given number is even or odd
Call your function*/

function oddOrEven() {
    let num = (prompt('Please enter a number'));
    if (isNaN(num)) {
        alert(`${num} is not a number! Please enter a valid number`)
        window.location.reload()
    } else if (num % 2 == 0) {
        alert(`${num} is an even number.`)
    } else
        alert(`${num} is an odd number`)
};
oddOrEven();