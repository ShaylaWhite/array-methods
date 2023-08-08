// Callback function
function greeting(name) {
    return `Hello, ${name}!`;
  }
  
  // Higher-order function that takes a callback
  function saySomething(callback, name) {
    const message = callback(name);
    return message;
  }
  
  // Using the higher-order function to log the result of the callback
  const result = saySomething(greeting, "Alice");
  console.log(result);
  