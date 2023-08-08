// The reduce() method is like having a magic box. You put things into the box one by one, and the box gives you back one special thing when you're done.

// Let's say you have a collection of toys, and you want to count how many you have.
const toys = [1, 2, 3, 4, 5];

// You can use the reduce() method to count them by telling the box to start with zero and add each toy one by one.
const totalToys = toys.reduce((accumulator, toy) => {
  return accumulator + toy;
}, 0);

// The magic box starts with the value 0 (our starting point), and then it adds each toy (one at a time) to the value inside the box.

// When you're done putting toys in the box, you open the box and find out how many toys you have in total.
console.log(totalToys); // Output: 15

// You can also use the reduce() method to do more things, like finding the biggest toy in your collection.

const biggestToy = toys.reduce((currentBiggest, toy) => {
  if (toy > currentBiggest) {
    return toy; // The new biggest toy becomes the current biggest toy.
  } else {
    return currentBiggest; // Keep the current biggest toy.
  }
}, 0);

// In this case, the magic box helps you compare each toy's size with the current biggest toy and keeps the biggest one.

// When you open the box again, you find the biggest toy in your collection.
console.log(biggestToy); // Output: 5

// So, the reduce() method is like a magic box that helps you combine things and get something special out of them, step by step.


array.reduce(callback, initialValue)



/*
array: The array on which the reduce() method is called.
callback: A function that is called on each element of the array. 
It takes four arguments: accumulator, currentValue, currentIndex, and array.
     accumulator: The value that accumulates the result of previous iterations.
       currentValue: The current element being processed.
       currentIndex: (Optional) The index of the current element being processed.
        array: (Optional) The array on which the reduce() method was called.
initialValue: (Optional) The initial value of the accumulator. If not provided, the first element of the array is used as the initial value, and the callback starts from the second element.

*/


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

//0 

//I'm explicitly providing 0 as the initial value for the accumulator. This means that when the reduce() method starts processing the array, the initial value of the accumulator will be 0, 
//and the callback function will start adding each element of the array to this initial value.