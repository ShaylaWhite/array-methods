

/*
PURPOSE: Select certain elements from a source array.

Another common procedure is to filter elements from an array based on some custom condition. The condition must return true or false. If it returns true, the element is kept and stored in the new array. If false, it's skipped.


*/ 

function greaterThan100(num) {
    return num > 100;
  }
  
  const numbers = [45, 98, 123, 45, 78, 102, 203, 54, 23];
  
  // Using filter() to create a new array containing elements greater than 100
  const numbersGreaterThan100 = numbers.filter(greaterThan100);
  
  console.log(numbersGreaterThan100); // Output: [123, 102, 203]
  

  /*
In this example, we have defined the greaterThan100 function, which returns true if the input number is greater than 100, and false otherwise.

We then use the filter() method on the numbers array to create a new array numbersGreaterThan100 containing only the elements that satisfy the condition specified by the greaterThan100 function. The resulting array contains the elements [123, 102, 203], which are the numbers greater than 100 from the original array.

The filter() method is a powerful way to selectively extract elements from an array based on a specific condition, providing a clean and readable solution.

  */


