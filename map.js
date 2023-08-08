/*
The map() function is a higher-order array method in JavaScript that allows you to create a new array by applying a callback function to each element of an existing array. It returns an array of the same length as the original, where each element is the result of the callback function applied to the corresponding element in the original array.

Here's the basic syntax of the map() function:


*/


const newArray = originalArray.map(callbackFunction);












/*
originalArray: The array you want to transform.
callbackFunction: A function that is applied to each element of the original array. It can take three parameters: currentValue, index (optional), and array (optional).
Example:

javascript


*/

const numbers = [1, 2, 3, 4, 5];

// Using map() to create a new array where each element is doubled
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]




/*
In this example, the map() function is used to create a new array doubledNumbers by doubling each element of the numbers array. The callback function takes each number as an argument and returns number * 2. The resulting array contains the values [2, 4, 6, 8, 10].

You can also use arrow functions for a more concise syntax:



*/ 

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
