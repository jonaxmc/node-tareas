const fs = require('fs'); //Llama al paquete FS

let tareasPorHacer = []; //Vector de tareas vacío

//Método para cargar las tareas
const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json'); //Carga el archivo json
    } catch (error) {
        tareasPorHacer = [];
    }
}

//Método para guardar las tareas
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer); //Crea los datos en formato json
    fs.writeFile('db/data.json', data, (err) => { //Crea el archivo json con los datos
        if (err) throw new Error('No se pudo guardar', err);
    });
}

//Método para crear tareas
const crear = (descripcion) => {
    cargarDB(); //Carga los datos
    let tarea = { //Crea un objeto llamado tarea
        descripcion, //Descripción de la tarea
        completado: false //Estado de la tarea
    };
    tareasPorHacer.push(tarea); //Sube el listado de tareas
    guardarDB(); //Guarda las tareas
    return tarea;
}

//Método para listar las tareas
const getLista = (com) => {
    cargarDB(); //Carga los datos
    let Listado = tareasPorHacer.filter(tarea => String(tarea.completado) === com); //Filtar los datos de acuerdo al estado de la tarea
    return Listado; //Retorna las tareas según el estado
}

//Método para actualizar una tarea
const actualizar = (descripcion, completado = true) => {
    cargarDB(); //Carga los datos
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //Busca el indice de la tarea

    if (index >= 0) { //Si el índice es mayor o igual que 0, el estado de esa tarea se cambiará a true
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

}

const borrar = (descripcion) => {
    cargarDB(); //Carga los datos
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion); //Filtra la tarea de acuerdo a la descripción
    if (tareasPorHacer.length === nuevoListado.length) { //Si el tamaño de la lista filtrada es igual a la nueva lista retornara false ya que no hay coincidencias
        return false;
    } else {
        tareasPorHacer = nuevoListado; //Caso contrario se genera la nueva lista del filtrado 
        guardarDB(); //Guarda los datos
        return true;
    }
}

//Exportar los métodos a utilizarse
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}