### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
#Callbacks: functions passed as arguments to be executed after a task is completed
#Promises: Objects representing event completion 
#Async/await: asynchronous codes to be written in a synchronous manner 

- What is a Promise?
Promise is an object that represents the eventual completion of an asynchronous operation 

- What are the differences between an async function and a regular function?
Async function: 
Declared with 'async' keyword
Always returns a promise
Always uses 'await' keyword to pause a function until a promise is resolved

Regular function:
Doesn't always return a promise
Executes synchronously 

- What is the difference between Node.js and Express.js?
Node.js: A runtime environment that allows javascript to be run on the server. 
Express.js: A web application built on top of node.js

- What is the error-first callback pattern?
The error-firs callback pattern is used in Node.js where first argument of a callback function is an error object, and subsequent arguments are for successful executions

- What is middleware?
Middleware in Express.js is a function that has access to request object, the response object, and "next" function in request-response cycle. 

- What does the `next` function do?
'next' in Express.js passes control onto the next middleware function

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
issues: 
1. the 'await' keyword in three API pulls makes each request wait for the previous one to complete, instead of all pulls occuring concurrently
2. there is no error handling, so if one request fails, the entire function will fail
3. the code uses jQuery($.getJSON), it is better to use axios 
