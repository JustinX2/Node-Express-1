### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
<p>Callbacks: functions passed as arguments to be executed after a task is completed</p>
<p>Promises: Objects representing event completion</p>
<p>Async/await: asynchronous codes to be written in a synchronous manner</p>

- What is a Promise?
<p>Promise is an object that represents the eventual completion of an asynchronous operation</p>

- What are the differences between an async function and a regular function?
<p>Async function: 
Declared with 'async' keyword
Always returns a promise
Always uses 'await' keyword to pause a function until a promise is resolved</p>

<p>Regular function:
Doesn't always return a promise
Executes synchronously</p>

- What is the difference between Node.js and Express.js?
<p>Node.js: A runtime environment that allows javascript to be run on the server.</p> 
<p>Express.js: A web application built on top of node.js</p> 

- What is the error-first callback pattern?
<p>The error-firs callback pattern is used in Node.js where first argument of a callback function is an error object, and subsequent arguments are for successful executions</p> 

- What is middleware?
<p>Middleware in Express.js is a function that has access to request object, the response object, and "next" function in request-response cycle.</p>

- What does the `next` function do?
<p>'next' in Express.js passes control onto the next middleware function</p>

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
<p>issues: 
1. the 'await' keyword in three API pulls makes each request wait for the previous one to complete, instead of all pulls occuring concurrently
2. there is no error handling, so if one request fails, the entire function will fail
3. the code uses jQuery($.getJSON), it is better to use axios
</p>
