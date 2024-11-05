// routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Endpoint para listar habitaciones
router.get('/habitaciones', async (req, res) => {
  try {
    const habitaciones = await Room.find();
    res.json(habitaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las habitaciones' });
  }
});

// routes/roomRoutes.js (continuación)
router.get('/habitaciones/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const habitacion = await Room.findById(id);
      if (!habitacion) {
        return res.status(404).json({ message: 'Habitación no encontrada' });
      }
      res.json(habitacion.ocupacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la disponibilidad' });
    }
});  

module.exports = router;
