const  todoService  = require('../service/todo.service');

// Controller for creating a new Todo
const createTodo = async (req, res) => {
  try {
    const todo = req.body;
    const savedTodo = await todoService.createTodo(todo);
    res.status(200).json({ success: true, savedTodo });
  } catch (error) {
    res.status(500).json({ error: 'Could not create todo' });
  }
};

// Controller for getting all Todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.status(200).json({ success: true, todos });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve toods', details: error.message });
  }
};


// Controller for updating a single Todo
const updateTodo = async (req, res) => {
  try {
    const todo = req.body;
    const todoId = req.params.id;
    const updatedTodo = await todoService.updateTodo(todo,todoId);
    res.status(200).json({ success: true, updatedTodo });
  } catch (error) {
    res.status(404).json({ error: `Could not update todo ${error}` });
  }
};

// Controller for deleting a Todo
const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    await todoService.deleteTodo(todoId);
    res.status(200).json({ success: true ,message: 'Deleted Todo Successfully'});
  } catch (error) {
    res.status(404).json({ error: `Could not delete todo ${error}` });
  }
};


module.exports = {
    getAllTodos,
    deleteTodo,
    createTodo,
    updateTodo
};
