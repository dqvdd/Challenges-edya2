// Definimos la clase Node para representar los nodos de la linked list
class Node {
  constructor(data) {
    this.data = data; // Valor del nodo
    this.next = null; // Referencia al siguiente nodo
  }
}

// Definimos la clase LinkedList para la lista enlazada
class LinkedList {
  constructor() {
    this.head = null; // Puntero al primer nodo (inicio de la lista)
  }

  // Método para agregar un elemento a la linked list
  add(data) {
    const newNode = new Node(data); // Creamos un nuevo nodo con el valor dado
    if (!this.head) {
      this.head = newNode; // Si la lista está vacía, el nuevo nodo es la cabeza
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Avanzamos hasta el último nodo
      }
      current.next = newNode; // Agregamos el nuevo nodo al final de la lista
    }
  }

  // Método para mostrar los elementos de la linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data); // Mostramos el valor del nodo actual
      current = current.next; // Avanzamos al siguiente nodo
    }
  }

// Método para eliminar un nodo por su valor
    remove(data) {
    if (!this.head) {
      return; // Si la lista está vacía, no hay nada que eliminar
    }

    if (this.head.data === data) {
      this.head = this.head.next; // Si el nodo a eliminar es la cabeza, actualizamos la cabeza
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      return; // No se encontró el valor en la lista
    }

    prev.next = current.next; // Enlazamos el nodo anterior con el siguiente para saltar el nodo a eliminar
  }

}

// Creamos una instancia de LinkedList para nuestra To-Do list
const todoList = new LinkedList();

// Agregamos tareas a la To-Do list
todoList.add("Comprar mecato");
todoList.add("Completar tarea");
todoList.add("Ir al gimnasio");

// Mostramos la lista de tareas
console.log("To-Do List:");
todoList.display();
