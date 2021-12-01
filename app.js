const cajaText = document.getElementById("input-text")
const buttonEnviar = document.getElementById("btn-enviar")
const tareas = []
const listaTareas = document.getElementById("todo-list")
buttonEnviar.addEventListener("click",guardarTarea)


function guardarTarea(){
    const textoTarea = cajaText.value

    if(textoTarea.length > 0){
        tareas.push(textoTarea)
        actualizarLista(tareas)

    }
 

}

function agregarTareaALista(tarea){

const elementoLista = document.createElement('li')
    elementoLista.textContent = tarea

    listaTareas.appendChild(elementoLista)
    cajaText.value =""


}


function actualizarLista(arrayDeTareas){
    
    listaTareas.innerHTML = ""
    const fragmento = document.createDocumentFragment();

for (let index = 0; index < arrayDeTareas.length; index++) {
    const itemLista = document.createElement('li')
    itemLista.textContent = arrayDeTareas[index]
    fragmento.appendChild(itemLista)    

}
    listaTareas.appendChild(fragmento)    


}


console.log(cajaText);
