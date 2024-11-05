// models/Room.js
const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  ocupacion: {
    lunes: { type: Boolean, default: false },
    martes: { type: Boolean, default: false },
    miercoles: { type: Boolean, default: false },
    jueves: { type: Boolean, default: false },
    viernes: { type: Boolean, default: false },
    sabado: { type: Boolean, default: false },
    domingo: { type: Boolean, default: false }
  }
});

module.exports = mongoose.model('Room', RoomSchema);
