import sum, {multiply as mul} from './math.js';

import * as math from './math.js';

console.log(sum(5, 10)); // Outputs: 15
console.log(mul(5, 10)); // Outputs: 50

console.log(math.multiply(5, 10)); // Outputs: 50


// using bacticks, used for string interpolation.

const firstName = 'Mrinal';

const greeting = `Hello, ${firstName}! Welcome to the world of JavaScript modules.`;
console.log(greeting); // Outputs: Hello, Mrinal! Welcome to the world of JavaScript modules.


// array find method : it return first element where expression becomes true.
// If no element is found, it returns undefined.
const todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Build a project', completed: false }
];

const todo = todos.find(todo => todo.completed == false);
console.log(todo); // Outputs: { id: 2, text: 'Learn React', completed: false }


// array filter method : it returns all elements where expression becomes true.
const completedTodos = todos.filter(todo => todo.completed == false);

console.log(completedTodos); // Outputs: [ { id: 1, text: 'Learn JavaScript', completed: true

// for each method : it executes a function for each element in the array.
todos.forEach(todo => {
  console.log(todo.text);
}); // Outputs: Learn JavaScript, Learn React, Build a project


// array map method : it returns a new array with the results of calling a function for every element in the array.
const todoTexts = todos.map(todo => {
    return {id: todo.id, text: todo.text};
});

console.log(todoTexts); // Outputs: [ 'Learn JavaScript', 'Learn React', 'Build a project' ]



