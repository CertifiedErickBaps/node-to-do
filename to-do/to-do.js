const fs = require("fs");

let listadoToDo = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoToDo);

  fs.writeFile(`db/data.json`, data, err => {
    if (err) throw new Error("No se pudo grabar", err);
  });
};

const cargarDB = () => {
  try {
    listadoToDo = require("../db/data.json");
  } catch (error) {
    listadoToDo = [];
  }

  /* console.log(listadoToDo); */
};

const crear = descripcion => {
  cargarDB();
  let toDo = {
    descripcion,
    completado: false
  };

  listadoToDo.push(toDo);
  guardarDB();
  return toDo;
};

const borrar = descripcion => {
  cargarDB();
  let newListadoToDo = listadoToDo.filter(
    tarea => tarea.descripcion !== descripcion
  );

  if (listadoToDo.length === newListadoToDo.length) {
    return false;
  } else {
    listadoToDo = newListadoToDo;
    guardarDB();
    return true;
  }
};

const getListado = () => {
  cargarDB();
  return listadoToDo;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

  if (index >= 0) {
    listadoToDo[index].completado = completado;
    guardarDB();
    return true;
  } else return false;
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
