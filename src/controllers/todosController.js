const Todo = require('../models/todo');

// Obtener todas las tareas
exports.getAllTodos = (req, res, next) => {
  Todo.findAll()
    .then(todos => {
      res.json(todos);
    })
    .catch(error => {
      next({ status: 500, message: 'Error al obtener las tareas', error });
    });
};

// Obtener una tarea por su id
exports.getTodoById = (req, res, next) => {
  const { id } = req.params;
  Todo.findByPk(id)
    .then(todo => {
      if (todo) {
        res.json(todo);
      } else {
        next({ status: 404, message: 'Tarea no encontrada' });
      }
    })
    .catch(error => {
      next({ status: 500, message: 'Error al obtener la tarea', error });
    });
};

// Crear una nueva tarea
exports.createTodo = (req, res, next) => {
  const { title, description, completed } = req.body;
  Todo.create({ title, description, completed })
    .then(todo => {
      res.status(201).json(todo);
    })
    .catch(error => {
      next({ status: 500, message: 'Error al crear la tarea', error });
    });
};

// Actualizar una tarea
exports.updateTodo = (req, res, next) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  Todo.findByPk(id)
    .then(todo => {
      if (todo) {
        todo.title = title;
        todo.description = description;
        todo.completed = completed;
        return todo.save();
      } else {
        next({ status: 404, message: 'Tarea no encontrada' });
      }
    })
    .then(updatedTodo => {
      res.json(updatedTodo);
    })
    .catch(error => {
      next({ status: 500, message: 'Error al actualizar la tarea', error });
    });
};

// Eliminar una tarea
exports.deleteTodo = (req, res, next) => {
  const { id } = req.params;
  Todo.findByPk(id)
    .then(todo => {
      if (todo) {
        return todo.destroy();
      } else {
        next({ status: 404, message: 'Tarea no encontrada' });
      }
    })
    .then(() => {
      res.json({ message: 'Tarea eliminada correctamente' });
    })
    .catch(error => {
      next({ status: 500, message: 'Error al eliminar la tarea', error });
    });
};
