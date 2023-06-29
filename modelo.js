const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    Alumnos: {
        type: Number,
        required: true
    }
});

const Salon = mongoose.model('Salon', salonSchema);

module.exports = Salon;