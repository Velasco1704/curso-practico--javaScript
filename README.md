# Curso Practico de JavaScript

[Project Page](https://astonishing-kleicha-8af2fb.netlify.app/)

## Que es el DOM

El DOM (Document Object Model) es una representación estructurada y jerárquica de un documento HTML, XML o XHTML. Es una interfaz de programación que permite acceder y manipular los elementos de un documento web de manera dinámica.

Cuando un navegador web carga un documento, crea una estructura de árbol del documento, donde cada elemento HTML se convierte en un nodo del árbol. Cada nodo del árbol representa un elemento del documento, como una etiqueta **div**, un párrafo **p**, una imagen **img**, etc. Estos nodos se organizan en una estructura jerárquica, donde los nodos hijos están contenidos dentro de los nodos padres.

El DOM proporciona métodos y propiedades para acceder, modificar y manipular estos nodos del árbol. Esto permite a los desarrolladores web interactuar con los elementos de la página, cambiar su contenido, estilo, atributos, agregar o eliminar elementos, y responder a eventos como clics de botón o cambios de formulario.

En JavaScript, se puede manipular el DOM utilizando las API proporcionadas por el navegador. Por ejemplo, se pueden utilizar métodos como **getElementById**, **querySelector** o **getElementsByTagName** para seleccionar elementos del DOM por su id, clase o etiqueta. Una vez seleccionados, se pueden modificar sus propiedades, como el contenido (**innerHTML**), los atributos (**setAttribute**), los estilos (**style**) y más.

```js
// Obtener el elemento por su id
var elemento = document.getElementById("miElemento");

// Modificar el contenido del elemento
elemento.innerHTML = "Nuevo contenido";
```

En este ejemplo, se selecciona un elemento del DOM utilizando su id y luego se modifica su contenido utilizando la propiedad **innerHTML**.

El DOM es una herramienta poderosa para crear aplicaciones web interactivas y dinámicas. Permite a los desarrolladores acceder y manipular los elementos de una página web de manera programática, lo que facilita la creación de experiencias de usuario personalizadas y dinámicas.

## Métodos para manipular el DOM

- **classList.add**: Este método se utiliza para agregar una clase a un elemento del DOM. Por ejemplo, si tenemos un elemento con el id "miElemento" y queremos agregar la clase "nuevaClase", podemos hacerlo de la siguiente manera:

```js
var elemento = document.getElementById("miElemento");
elemento.classList.add("nuevaClase");
```

- **classList.remove**: Este método se utiliza para eliminar una clase de un elemento del DOM. Por ejemplo, si queremos eliminar la clase "viejaClase" del elemento con el id "miElemento", podemos hacerlo de la siguiente manera:

```js
var elemento = document.getElementById("miElemento");
elemento.classList.remove("viejaClase");
```

- **classList.toggle**: Este método se utiliza para alternar la presencia de una clase en un elemento del DOM. Si la clase está presente, se elimina; si no está presente, se agrega. Por ejemplo, si queremos alternar la clase "activado" en el elemento con el id "miElemento", podemos hacerlo de la siguiente manera:

```js
var elemento = document.getElementById("miElemento");
elemento.classList.toggle("activado");
```

- **innerHTML**: Esta propiedad se utiliza para obtener o establecer el contenido HTML de un elemento. Por ejemplo, si queremos cambiar el contenido de un elemento con el id "miElemento" por "Nuevo contenido", podemos hacerlo de la siguiente manera:

```js
var elemento = document.getElementById("miElemento");
elemento.innerHTML = "Nuevo contenido";
```

- **innerText**: Esta propiedad se utiliza para obtener o establecer el contenido de texto de un elemento. A diferencia de innerHTML, innerText solo devuelve el texto visible en la página, sin incluir etiquetas HTML. Por ejemplo, si queremos obtener el contenido de texto de un elemento con el id "miElemento", podemos hacerlo de la siguiente manera:

```js
var elemento = document.getElementById("miElemento");
var contenidoTexto = elemento.innerText;
```

- **append y appendChild**: Estos métodos se utilizan para agregar elementos o contenido al final de otro elemento. Por ejemplo, si queremos agregar un nuevo párrafo al final de un elemento con el id "miElemento", podemos hacerlo de la siguiente manera:

```js
var elementoPadre = document.getElementById("miElemento");
var nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Nuevo párrafo";
elementoPadre.append(nuevoParrafo);
```

Estos son solo algunos ejemplos de los métodos que se pueden aplicar al DOM utilizando JavaScript. El DOM proporciona muchas más opciones y funcionalidades para interactuar con los elementos de una página web.

### Diferencias entre append y appendChild

La diferencia entre **append y appendChild** radica en cómo se utilizan para agregar elementos al DOM.

- **append**: Es un método más reciente del DOM que permite agregar uno o más elementos al final de otro elemento. Puede aceptar nodos, elementos o cadenas HTML que definen nodos y elementos. Por ejemplo, para agregar un nuevo párrafo al final de un elemento con el id "miElemento", se puede usar append de la siguiente manera:

- **appendChild**: Es un método más antiguo que solo acepta nodos y se utiliza para agregar un solo nodo al final de otro elemento. Por ejemplo, para agregar un nuevo párrafo al final de un elemento con el id "miElemento", se puede usar appendChild de la siguiente manera:

```js
//append
var elementoPadre = document.getElementById("miElemento");
var nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Nuevo párrafo";
elementoPadre.append(nuevoParrafo);

//appendChild
var elementoPadre = document.getElementById("miElemento");
var nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Nuevo párrafo";
elementoPadre.appendChild(nuevoParrafo);
```

## AddEventListener

**addEventListener** es un método en JavaScript que se utiliza para adjuntar un controlador de eventos a un elemento del DOM. Permite que una función se ejecute cuando ocurre un evento específico en ese elemento. Algunos de los eventos más comunes que se pueden utilizar con **addEventListener** son:

- **click**: Se dispara cuando se hace clic en el elemento.
- **mouseover**: Se dispara cuando el puntero del mouse se mueve sobre el elemento.
- **keydown**: Se dispara cuando se presiona una tecla en el teclado mientras el elemento tiene el foco.
- **submit**: Se dispara cuando se envía un formulario.
- **load**: Se dispara cuando se completa la carga de un recurso, como una imagen o un archivo de script.

Por ejemplo, para agregar un controlador de eventos **click** a un botón con el id "myButton" y ejecutar una función llamada **doSomething** cuando se hace clic en el botón, se puede utilizar addEventListener de la siguiente manera:

```js
var button = document.getElementById("myButton");
button.addEventListener("click", doSomething);
```

En este ejemplo, cuando se hace clic en el botón, se ejecutará la función **myButton**.

## Finalize este curso en 8:30h
