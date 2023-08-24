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
    const { deletedId } = req.body;

    const todos = await todosModel.value();

    await todos.remove({ id: deletedId }).write();

    res.status(200).json({
        error: false,
        errorText: '',
        additionalErrors: null,
        data: {id: deletedId},
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