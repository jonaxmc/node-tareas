const descripcion = {
    demmand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const compleatado = {
    demmand: true,
    alias: 'c',
    desc: "Marca como completado o pendiente la tarea"
};


const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea', {
        descripcion,
        compleatado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}