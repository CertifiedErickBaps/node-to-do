const argv = require("./config/yarg").argv;
const toDo = require("./to-do/to-do");
const colors = require("colors");

/* console.log(argv); */

let comando = argv._[0];

switch (comando) {
  case "crear":
    console.log("Crear por hacer");
    let tarea = toDo.crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    console.log("Mostrar todas las tareas por hacer");
    let listado = toDo.getListado();
    for (let tarea of listado) {
      console.log("==============Tareas por hacer=========".green);
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("=======================================".green);
    }
    break;
  case "actualizar":
    console.log("Actualiza una tarea");
    let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case "borrar":
    console.log("Borrar una tarea");
    let borrar = toDo.borrar(argv.descripcion);
    console.log(borrar);
    break;
  default:
    console.log("Comando no reconocido");
}
