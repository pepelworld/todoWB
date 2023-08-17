const { todosModel } = require('../../models/todos');

const createTodoController = async (req, res) => {
    res.status(200).json({
        jsonrpc: '2.0',
        error: false,
        errorText: '',
        additionalErrors: null,
        data: {},
    });
};

const deleteTodoController = async (req, res) => {
    res.status(200).json({
        jsonrpc: '2.0',
        error: false,
        errorText: '',
        additionalErrors: null,
        data: {},
    });
};

const fetchTodosController = async (req, res) => {
    const todos = await todosModel.value();

    res.status(200).json({
        jsonrpc: '2.0',
        error: false,
        errorText: '',
        additionalErrors: null,
        data: {
            todos,
        },
    });
};

const updateTodosController = async (req, res) => {
    res.status(200).json({
        jsonrpc: '2.0',
        error: false,
        errorText: '',
        additionalErrors: null,
        data: {},
    });
};

module.exports = {
    deleteTodoController,
    createTodoController,
    fetchTodosController,
    updateTodosController,
};