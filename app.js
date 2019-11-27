const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');


let comando = argv._[0];
console.log(comando);
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getLista();
        for (let tarea of listado) {
            console.log("=====POR HACER=====".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.compleatado)
        }
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.compleatado)
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no conocido");
        break;
}