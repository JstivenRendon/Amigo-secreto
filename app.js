let nombreAmigos =[];

function agregarNombre()
{
   const inputAmigo = document.getElementById("amigo");
   const nombre = inputAmigo.value.trim();
   // permite solo letras, acentos y ñ 
   const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/;

   if(nombre ===""){
    alert ("inserte un nombre");
    return;
   }
   if(!soloLetras.test(nombre)){
    alert ("solo se permiten letras");
    console.log("el nombre solo debe contener letras");
    return;
   }
   nombreAmigos.push(nombre);

   refrescarlista();
   inputAmigo.value = "";  
   inputAmigo.focus(); 
}

function refrescarlista()
{
    const listadoA = document.getElementById("listaAmigos");
    listadoA.innerHTML ="";

    nombreAmigos.forEach(amigo => 
    {
        const li = document.createElement("li");
        li.textContent = amigo;
        listadoA.appendChild(li);
    });
}

function sorteNombre ()
{
    if (nombreAmigos.length === 0) { 
        alert("No hay nombres en la lista para sortear."); 
        return; 
    }
    //genera numero aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length); 
    const nombreSeleccionado = nombreAmigos[indiceAleatorio]; 
    const resultadoElemento = document.getElementById("resultado");
    //elimina el nombre seleccionado
    nombreAmigos.splice(indiceAleatorio, 1);
     // Verifica si el elemento existe
     if (resultadoElemento) {
        resultadoElemento.textContent = `Nombre seleccionado: ${nombreSeleccionado}`;
        resultadoElemento.focus();
    } else {
        console.error("No se encontró el elemento resultado.");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnSortear").addEventListener("click", sorteNombre);
    document.getElementById("btnAdicionar").addEventListener("click", agregarNombre);

    const inputAmigo = document.getElementById("amigo");

    // Detectar cuando se presiona la tecla Enter en el input
    inputAmigo.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); 
            agregarNombre(); 
        }
    });
});