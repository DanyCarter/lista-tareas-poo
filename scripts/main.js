import { TareasManager } from "./tareasManager.js";

const boton_agregar = document.getElementById('boton-agregar')
const lista_tareas = document.querySelector('.lista-tareas')
const boton_limpiar = document.querySelector('.boton-limpiar')

const tareasManager = new TareasManager(lista_tareas);

//Iniciamos la app web 
tareasManager.inicializarContador();
tareasManager.listarTareas();

boton_agregar.addEventListener('click', () => {
    tareasManager.agregarTarea("");
});

boton_limpiar.addEventListener('click', () => {
    tareasManager.limpiarTodo();
});

lista_tareas.addEventListener('click', (event) => {
    const target = event.target;

     if(target.type === 'submit'){
        tareasManager.eliminarTarea(target.parentElement.getElementById);
     }

});

lista_tareas.addEventListener('keypress', (event) => {
    const target = event.target;
    // En el sistema ASCII, el codigo 13 corresponde a la tecla ENTER
    if(event.keyCode === 13){
        tareasManager.editarTarea(target.parentElement.id, target.value);
    }
})