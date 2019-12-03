const descripcion = {
    demand: true,
    alias: 'd', //Crea un alias para la descripción
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 'c', //Crea un alias para el estado de la tarea
    desc: "Marca como completada o pendiente la tarea"
};

//Definimos los comandos necesarios
const argv = require('yargs')
    .command('crear', 'Crear una tarea', { //comando crear, requiere la descripción de la tarea
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', { //comando actualizar, requiere la descripción y el estado de la tarea 
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', { //comando borrar, requiere la descripción de la tarea
        descripcion
    })
    .command('listar', 'Lista una tarea', { //comando listar, requiere el estado de la tarea
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}