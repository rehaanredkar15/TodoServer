const { Router } = require('express');
const {
  getAllTodos, createTodo, updateTodo,deleteTodo
} = require('../controller/todo.controller');


const TodosApi = new Router();

// Get todos 
TodosApi.get('/getTodos', getAllTodos);

// Add new Todo
TodosApi.post('/addTodo', createTodo);

// Update an Todo
TodosApi.put('/updateTodo/:id', updateTodo);

// Delete an Todo
TodosApi.delete('/deleteTodo/:id', deleteTodo);


module.exports = TodosApi;