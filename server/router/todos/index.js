const express = require('express');
const {
    deleteTodoController,
    createTodoController,
    fetchTodosController,
    updateTodosController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

// todos
todosRouter.get('/getTodos', fetchTodosController);
todosRouter.post('/deleteTodo', deleteTodoController);
todosRouter.post('/createTodo', createTodoController);
todosRouter.post('/updateTodo', updateTodosController);

module.exports.todosRouter = todosRouter;