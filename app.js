//Hace un llamado a las librerias y métodos 
const argv = require('./config/yargs').argv; //Método yargs
const tareas = require('./controlador/tareas-por-hacer'); //Funciones tareas por hacer
const colors = require('colors'); //Paquete de colores

let comando = argv._[0];

//Crear un menú de comandos
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion); //Llama al método "crear" y recibe la descripción como parámetro
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getLista(argv.completado); //Llama al método "getLista" y recibe como parámetro el estado de la tarea
        //Crear un if que imprime las tareas de acuerdo al parámetro que recibe(true o false)
        if (argv.completado === "true") { //Si el estado es true imprimirá las tareas con el valor true
            for (let tarea of listado) { //Crear un for que recorra las tareas
                console.log("======= POR HACER =====".green);
                console.log(tarea.descripcion); //Imprime la descripción de la tarea
                console.log("Estado: ", tarea.completado); //Imprime el estado de la tarea
            }
        } else if (argv.completado === "false") { //Si el estado es false imprimirá las tareas con el valor false
            for (let tarea of listado) { //Crear un for que recorra las tareas
                console.log("======= POR HACER =====".green);
                console.log(tarea.descripcion); //Imprime la descripción de la tarea
                console.log("Estado: ", tarea.completado); //Imprime el estado de la tarea
            }

        }
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado); //Llama al método actualizar, recibe como parámetro la descripción y estado de la tarea
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion); //Llama al método borrar, recibe como parámetro la descripción de la tarea
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}