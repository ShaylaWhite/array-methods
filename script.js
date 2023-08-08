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
  


  const livingSingleCast = [
    "Queen Latifah",
    "Kim Coles",
    "Erika Alexander",
    "Kim Fields",
    "John Henton",
    "T.C. Carson"
  ];
  
  // Using a for loop to send email to each person
  function sendEmail(name) {
    console.log(`Email sent to ${name}: You were amazing in Living Single!`);
  }
  
  for (let i = 0; i < livingSingleCast.length; i++) {
    sendEmail(livingSingleCast[i]);
  }
  
  // Using an arrow function and .forEach() to send email to each person
  livingSingleCast.forEach(name => {
    console.log(`Email sent to ${name}: You were amazing in Living Single!`);
  });
  