const mongoose = require('mongoose');

const conectarBD = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://127.0.0.1:27017/proyecto2', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('Conexión exitosa a la base de datos');
                resolve();
            })
            .catch(error => {
                console.error('Error al conectar a la base de datos:', error);
                reject(error);
            });
    });
};

module.exports = conectarBD;