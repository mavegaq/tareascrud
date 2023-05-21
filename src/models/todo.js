const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Todo = db.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
},{
  timestamps:false,
});

// Sincroniza la base de datos
db.sync({ force: false })
  .then(() => console.log('Tabla Todo creada correctamente'))
  .catch(error => console.log('Error al crear la tabla Todo:', error));

module.exports = Todo;
