const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');
require('dotenv').config();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/v1/todos', todosRouter);

// Puerto de escucha
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

// Acceder a las variables de entorno
const dbName = process.env.DB_NAME;
console.log(dbName);
