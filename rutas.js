const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

// Crear un salón de clases
router.post('/', controlador.crearSalonDeClases);

// Obtener todos los salones de clases
router.get('/', controlador.obtenerSalonesDeClases);

// Obtener un salón de clases por ID
router.get('/:id', controlador.obtenerSalonDeClasesPorId);

// Actualizar un salón de clases por ID
router.put('/:id', controlador.actualizarSalonDeClases);

// Eliminar un salón de clases por ID
router.delete('/:id', controlador.eliminarSalonDeClases);

module.exports = router;