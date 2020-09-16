(function () {
  //VARIABLES
  var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");

  // FUNCIONES
  var agregarTarea = function () {
    var tarea = tareaInput.value;
    nuevaTarea = document.createElement("li");
    enlace = document.createElement("a");
    contenido = document.createTextNode(tarea);

    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agrega una tarea valida!");
      tareaInput.className = "error";
      return false;
    }
    // agrega el contenido al enlace
    enlace.appendChild(contenido);
    // le establecemos un atributo href
    enlace.setAttribute("href", "#");
    // agregar el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(enlace);
    // Agrega la nueva tarea a la lista
    lista.appendChild(nuevaTarea);
    // LIMPIA LA BARRA
    tareaInput.value = "";

    // this hace referencia a lo que estamos trabajando en el objeto
    for (var i = 0; i <= lista.children.length - 1; i++) {
      lista.children[i].addEventListener("click", function () {
        this.parentNode.removeChild(this);
      });
    }
  };

  var comprobarInput = function () {};
  var eliminarTarea = function () {};
  // EVENTOS

  // AGREGAR TAREA
  btnNuevaTarea.addEventListener("click", agregarTarea);

  // COMPROBAR INPUT
  tareaInput.addEventListener("click", comprobarInput);

  // BORRAR ELEMENTOS DE LA LISTA
  for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
})();
