let amigos = [];

//Inserta un nuevo contacto en el array de amigos, asegurándote de que el campo de nombre no quede vacío antes de incluirlo. Luego, refresca la lista mostrada en pantalla.
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("¡Inserta un nombre!");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
  return
}

//Genera dinámicamente elementos <li> en el DOM para cada amigo registrado, reflejando así la lista actual en la interfaz.
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
  return
}

//Elige al azar un amigo de la lista y muéstralo. Antes de ejecutar el sorteo, valida que existan registros en la lista para evitar errores.
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
  return
}