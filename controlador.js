const Salon = require('./modelo');

const crearSalonDeClases = (req, res) => {
    const datosSalon = req.body;

    Salon.create(datosSalon)
        .then(salonCreado => res.json(salonCreado))
        .catch(error => res.status(500).json({ error: error.message }));
};

const obtenerSalonesDeClases = (req, res) => {
    Salon.find()
        .then(salones => res.json(salones))
        .catch(error => res.status(500).json({ error: error.message }));
};

const obtenerSalonDeClasesPorId = (req, res) => {
    const id = req.params.id;

    Salon.findById(id)
        .then(salon => res.json(salon))
        .catch(error => res.status(500).json({ error: error.message }));
};

const actualizarSalonDeClases = (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;

    Salon.findByIdAndUpdate(id, datosActualizados, { new: true })
        .then(salonActualizado => res.json(salonActualizado))
        .catch(error => res.status(500).json({ error: error.message }));
};

const eliminarSalonDeClases = (req, res) => {
    const id = req.params.id;

    Salon.findByIdAndDelete(id)
        .then(salonEliminado => res.json(salonEliminado))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports = {
    crearSalonDeClases,
    obtenerSalonesDeClases,
    obtenerSalonDeClasesPorId,
    actualizarSalonDeClases,
    eliminarSalonDeClases
};