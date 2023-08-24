const { todosModel } = require('../../models/todos');

const createTodoController = async (req, res) => {
    const todoData = req.body;

    const todos = todosModel.value()

    const newTodo = {
        id: todos.length,
        isCompleted: false,
        createdDate: new Date(),
        ...todoData,
    };

        await todosModel.push(newTodo).write();
        res.status(200).json({
            error: false,
            errorText: '',
            additionalErrors: null,
            data: newTodo,
        });
};

const deleteTodoController = async (req, res) => {
    const { id } = req.body;

    const todos = await todosModel.value();

    const foundTodo = todos.find((todo) => todo.id === id);

    if (!foundTodo) {
        res.status(200).json({
            error: {
                code: 404,
                message: 'todo doesnt exist',
            },
            errorText: '',
            data: {},
            additionalErrors: null,
        });

        return;
    }

    await todosModel.remove({ id }).write();

    res.status(200).json({
        error: false,
        errorText: '',
        additionalErrors: null,
        data: {
            id
        },
    });
};

const fetchTodosController = async (req, res) => {
    const todos = await todosModel.value();

    res.status(200).json({
        error: false,
        errorText: '',
        additionalErrors: null,
        data: {
            todos
        },
    });
};

const updateTodosController = async (req, res) => {
    const updatedData = req.body;

    const todos = await todosModel.value();

    const foundTodo = todos.find((todo) => todo.id === updatedData.id);

    const updatedTodo = await todosModel
        .find({ id: foundTodo.id })
        .assign(updatedData)
        .write();

    res.status(200).json({
        error: false,
        errorText: '',
        additionalErrors: null,
        data: updatedTodo,
    });
};

module.exports = {
    deleteTodoController,
    createTodoController,
    fetchTodosController,
    updateTodosController,
};