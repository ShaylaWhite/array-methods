/*
The .forEach() method is a built-in JavaScript array method that allows you to iterate over each element in an array and apply a specified callback function to each element. It provides a convenient way to perform an action on each item in an array without the need for traditional loop constructs like for or while loops.

The syntax for using the .forEach() method is as follows:

*/ 

array.forEach(callback(currentValue [, index [, array]]) {
    // Code to be executed on each element
  });
  

  /*
array: The array you want to iterate over.
callback: A function to be called for each element in the array. It can take up to three parameters:
currentValue: The current element being processed in the array.
index (optional): The index of the current element.
array (optional): The array on which forEach() was called.
The code inside the callback function is executed for each element in the array.


  */


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

/* 
In this example, the .forEach() method iterates over each element in the numbers array and logs each element to the console.

The .forEach() method is commonly used for performing operations that involve side effects on each array element, such as printing values, modifying array elements, or updating the DOM. If you need to create a new array based on the transformation of the original array's elements, you might consider using the .map() method instead.
*/