const Todo = require('../model/todo.model');

const createTodo = async (newTodo) => {
  try {
    const savedTodo = await Todo.create(newTodo);
    return savedTodo;
  } catch (error) {
    return { success: false, error: 'Could not create todo', details: error.message };
  }
};
const getAllTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error) {
    return { success: false, error: 'Could not retrieve todos', details: error.message };
  }
};


const updateTodo = async (updatedTodo, todoId ) => {
  try {
    const updated = await Todo.findByIdAndUpdate(todoId, updatedTodo, { new: true });
    return updated;
  } catch (error) {
    return { success: false, error: 'Could not update todo', details: error.message };
  }
};


const deleteTodo = async (todoId) => {
  try {
    const deletedTodo = await Todo.findByIdAndRemove(todoId);
    return deletedTodo;
  } catch (error) {
    return { success: false, error: 'Could not delete todo', details: error.message };
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
};





