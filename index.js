// app.js
const express = require('express');
const mongoose = require('mongoose');
const roomRoutes = require('./routes/roomRoutes');
const Room = require('./models/Room');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', roomRoutes);

const password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://TOMut4mn3tPvITie:${password}@comedor.zhardxq.mongodb.net/comedor`)
  .then(() => {
    console.log('Conectado a MongoDB');
    inicializarHabitaciones(); // Llama a la función de inicialización después de conectar a MongoDB
  })
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

// Datos de ejemplo para inicializar habitaciones si la colección está vacía
const inicializarHabitaciones = async () => {
  try {
    const existe = await Room.findOne();
    if (!existe) {
      await Room.create([
        { nombre: 'Habitación 101', descripcion: 'Habitación sencilla', ocupacion: { lunes: true, martes: false, miercoles: true, jueves: false, viernes: true, sabado: false, domingo: true } },
        { nombre: 'Habitación 102', descripcion: 'Habitación doble', ocupacion: { lunes: false, martes: true, miercoles: false, jueves: true, viernes: false, sabado: true, domingo: false } },
        // Agrega más habitaciones aquí con valores de ocupación específicos
      ]);
      console.log('Habitaciones inicializadas');
    }
  } catch (error) {
    console.error('Error al inicializar habitaciones:', error);
  }
};
