const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

// Obtener todas las tareas
router.get('/', todosController.getAllTodos);

// Obtener una tarea por su id
router.get('/:id', todosController.getTodoById);

// Crear una nueva tarea
router.post('/', todosController.createTodo);

// Actualizar una tarea
router.put('/:id', todosController.updateTodo);

// Eliminar una tarea
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
